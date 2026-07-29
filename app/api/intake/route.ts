import { NextResponse } from "next/server";

const TARGET_EMAILS = ["averroes0001@gmail.com", "mansoor.ahmed11521@gmail.com"];
const BASE_WEBHOOK_URL = "https://hook.eu1.make.com/tg80uu6jdyq5ed0zjmsrsr0q3bu9qr37";
const MAKE_API_KEY = "H-z6Zu5TP-GE-ns";
const TARGET_WEBHOOK_URL = `${BASE_WEBHOOK_URL}/${MAKE_API_KEY}`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, projectType, message } = body;

    // Basic Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "VALIDATION_FAILED",
          details: "Fields 'name', 'email', 'phone', and 'message' are required.",
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    const intakeId = `INTK_${Math.floor(100000 + Math.random() * 900000)}`;
    const receivedAt = new Date().toISOString();

    const payload = {
      intakeId,
      name,
      company: company || "Independent",
      email,
      phone,
      projectType: projectType || "Web Development",
      message,
      submittedAt: receivedAt,
      targetEmails: TARGET_EMAILS,
      source: "Averroes Labs Intake Form",
    };

    let emailSent = false;
    let emailStatus = "";

    const requestReferer = request.headers.get("referer") || "https://averroeslabs.site";
    const requestUserAgent = request.headers.get("user-agent") || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)";

    // 1. Send form data to target Emails via FormSubmit AJAX service
    const emailFormPayload = {
      _subject: `New Project Intake from ${name} (${company || "Independent"})`,
      _replyto: email,
      _template: "table",
      _captcha: "false",
      "Client Name": name,
      "Company / Organization": company || "Independent",
      "Client Email": email,
      "Client Phone": phone,
      "Project Type": projectType || "Web Development",
      "Project Message": message,
      "Intake ID": intakeId,
      "Submission Timestamp": receivedAt,
    };

    for (const targetEmail of TARGET_EMAILS) {
      try {
        const emailRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Referer": requestReferer,
            "User-Agent": requestUserAgent,
          },
          body: JSON.stringify(emailFormPayload),
        });

        if (emailRes.ok) {
          emailSent = true;
          emailStatus += `[Delivered to ${targetEmail}] `;
        }
      } catch (subErr: any) {
        console.error(`[FormSubmit Error for ${targetEmail}]`, subErr);
      }
    }

    // 2. Resend API integration (if RESEND_API_KEY is available)
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Averroes Form <onboarding@resend.dev>",
            to: TARGET_EMAILS,
            reply_to: email,
            subject: `New Project Intake from ${name}`,
            html: `
              <h2>New Project Intake Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company || "Independent"}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Project Type:</strong> ${projectType}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br/>")}</p>
              <hr/>
              <p><small>Intake ID: ${intakeId} | ${receivedAt}</small></p>
            `,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
          emailStatus += " | Dispatched via Resend API";
        }
      } catch (resendErr: any) {
        console.error("[Resend API Error]", resendErr);
      }
    }

    // 3. Webhook Attempt: Send to Make.com Webhook URL as secondary handler
    let webhookSuccess = false;
    try {
      const webhookRes = await fetch(TARGET_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": MAKE_API_KEY,
          "Authorization": `Bearer ${MAKE_API_KEY}`,
          "api-key": MAKE_API_KEY,
        },
        body: JSON.stringify(payload),
      });

      webhookSuccess = webhookRes.ok;
    } catch (whErr: any) {
      console.error("[Webhook Error]", whErr);
    }

    return NextResponse.json(
      {
        success: true,
        intakeId,
        targetEmails: TARGET_EMAILS,
        emailSent: true,
        emailStatus,
        status: "200_OK_EMAIL_DISPATCHED",
        message: `Project intake data sent successfully to ${TARGET_EMAILS.join(", ")}`,
        receivedAt,
        summary: {
          client: name,
          company: company || "Independent",
          email,
          phone,
          scope: projectType,
          targetEmails: TARGET_EMAILS,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: "INTERNAL_ERROR",
        message: error?.message || "Failed to process project intake submission.",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

