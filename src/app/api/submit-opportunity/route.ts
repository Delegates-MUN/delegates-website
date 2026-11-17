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

    // Log verified submission to secretariat audit trail
    console.log("[DELEGATES Opportunity Submission Received]", {
      title,
      organizer,
      category,
      format,
      location,
      deadline,
      url,
      contactEmail,
      descriptionLength: description ? description.length : 0,
      timestamp: new Date().toISOString(),
    });

    const referenceId = `DLGTS-OPP-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      message:
        "Your opportunity submission has been submitted to the DELEGATES Secretariat. Our team will verify credentials before publishing to the circuit directory.",
      referenceId,
    });
  } catch (err) {
    console.error("Error processing opportunity submission:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please try again or email delegates@zohomail.in directly." },
      { status: 500 }
    );
  }
}
