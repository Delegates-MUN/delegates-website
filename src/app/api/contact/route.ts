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

    // In production, forward to verified SMTP / Resend / Webhook
    // process.env.CONTACT_EMAIL_WEBHOOK or similar
    console.log("[DELEGATES Contact Submission Received]", {
      fullName,
      email,
      enquiryType,
      subject: subject || "None specified",
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Your enquiry has been securely logged with the DELEGATES Secretariat. We will respond via email shortly.",
      referenceId: `DLGTS-${Date.now().toString().slice(-6)}`,
    });
  } catch (err) {
    console.error("Error processing contact request:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
