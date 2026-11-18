import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, enquiryType, subject, message, consent } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!enquiryType || typeof enquiryType !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select an enquiry category." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "Consent to communications is required." },
        { status: 400 }
      );
    }

    const referenceId = `DLGTS-${Date.now().toString().slice(-6)}`;
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "fdce012a-4511-4e76-a4b5-7e7b72e8b183";
    const googleSheetsUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbzGDi6bHDlbSJPVoNp0Nbo3YrLbRwbKszgLZgfhBQak8p5V1_7lg6tJ0Q6mXNS7pHeH/exec";

    // 1. Log submission to Google Sheet (non-blocking for resilience)
    const logToSheetPromise = (async () => {
      try {
        if (googleSheetsUrl) {
          await fetch(googleSheetsUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fullName,
              email,
              enquiryType,
              subject: subject || "None specified",
              message,
              referenceId,
            }),
          });
        }
      } catch (sheetErr) {
        console.error("[Google Sheets Logging Error]", sheetErr);
      }
    })();

    // 2. Forward verified message to delegates@zohomail.in via Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "DELEGATES-Official-Platform/1.0",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[DELEGATES Contact] ${enquiryType} — ${fullName}`,
        from_name: "DELEGATES Official Secretariat",
        name: fullName,
        email: email,
        enquiry_type: enquiryType,
        custom_subject: subject || "None specified",
        message: message,
        reference_id: referenceId,
      }),
    });

    // Ensure sheet logging completes
    await logToSheetPromise;

    const forwardResult = await response.json();

    if (!response.ok || !forwardResult.success) {
      console.error("[Web3Forms Forwarding Error]", forwardResult);
      // Fallback: log to server logs even if forwarding service is unreachable
      return NextResponse.json(
        {
          success: false,
          error: "Unable to dispatch message at this moment. Please email delegates@zohomail.in directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your enquiry has been delivered to the DELEGATES Secretariat. We will respond via email shortly.",
      referenceId,
    });
  } catch (err) {
    console.error("Error processing contact request:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again or email delegates@zohomail.in directly.",
      },
      { status: 500 }
    );
  }
}
