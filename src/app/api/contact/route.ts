import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return NextResponse.redirect(new URL("/contact?error=missing", request.url));
    }

    // Log the submission (in production, wire up email notification here)
    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.redirect(new URL("/contact?success=true", request.url));
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.redirect(new URL("/contact?error=server", request.url));
  }
}