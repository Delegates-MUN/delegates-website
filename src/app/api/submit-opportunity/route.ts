import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      organizer,
      category,
      format,
      location,
      deadline,
      url,
      contactEmail,
      description,
      confirmedAuthentic,
    } = body;

    // Strict validation
    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Conference or opportunity title is required." },
        { status: 400 }
      );
    }

    if (!organizer || typeof organizer !== "string" || organizer.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Organizing body or institution is required." },
        { status: 400 }
      );
    }

    if (!location || typeof location !== "string" || location.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Location or platform is required." },
        { status: 400 }
      );
    }

    if (!deadline || typeof deadline !== "string" || deadline.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Application deadline is required." },
        { status: 400 }
      );
    }

    if (!url || typeof url !== "string" || (!url.startsWith("http://") && !url.startsWith("https://"))) {
      return NextResponse.json(
        { success: false, error: "A valid official URL starting with http:// or https:// is required." },
        { status: 400 }
      );
    }

    if (!contactEmail || typeof contactEmail !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
      return NextResponse.json(
        { success: false, error: "A valid organizer verification email is required." },
        { status: 400 }
      );
    }

    if (!confirmedAuthentic) {
      return NextResponse.json(
        { success: false, error: "You must confirm that this is an authentic, non-predatory opportunity." },
        { status: 400 }
      );
    }

    const referenceId = `DLGTS-OPP-${Date.now().toString().slice(-6)}`;
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "fdce012a-4511-4e76-a4b5-7e7b72e8b183";
    const googleSheetsUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbzGDi6bHDlbSJPVoNp0Nbo3YrLbRwbKszgLZgfhBQak8p5V1_7lg6tJ0Q6mXNS7pHeH/exec";

    // 1. Log opportunity submission to Google Sheet (non-blocking for resilience)
    const logToSheetPromise = (async () => {
      try {
        if (googleSheetsUrl) {
          await fetch(googleSheetsUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fullName: `${organizer} (via ${contactEmail})`,
              email: contactEmail,
              enquiryType: `Opportunity: ${category}`,
              subject: `${title} [${format} · ${location}]`,
              message: `Deadline: ${deadline} | Official URL: ${url} | Details: ${description || "None provided"}`,
              referenceId,
            }),
          });
        }
      } catch (sheetErr) {
        console.error("[Google Sheets Opportunity Logging Error]", sheetErr);
      }
    })();

    // 2. Forward opportunity details to delegates@zohomail.in
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "DELEGATES-Official-Platform/1.0",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[DELEGATES Opportunity Submission] ${category}: ${title}`,
        from_name: "DELEGATES Circuit Desk",
        opportunity_title: title,
        organizer: organizer,
        category: category,
        format: format,
        location: location,
        deadline: deadline,
        official_url: url,
        organizer_email: contactEmail,
        description: description || "No additional description provided",
        reference_id: referenceId,
      }),
    });

    await logToSheetPromise;

    const forwardResult = await response.json();

    if (!response.ok || !forwardResult.success) {
      console.error("[Web3Forms Opportunity Error]", forwardResult);
      return NextResponse.json(
        {
          success: false,
          error: "Unable to submit at this moment. Please email delegates@zohomail.in directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your opportunity submission has been delivered to the DELEGATES Secretariat. Our team will verify credentials before publishing to the circuit directory.",
      referenceId,
    });
  } catch (err) {
    console.error("Error processing opportunity submission:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again or email delegates@zohomail.in directly.",
      },
      { status: 500 }
    );
  }
}
