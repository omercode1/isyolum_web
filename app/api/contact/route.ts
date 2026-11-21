import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const allowedUserTypes = new Set([
  "student",
  "intern",
  "jobseeker",
  "worker",
  "freelancer",
  "university",
  "supporter",
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ code: "INVALID_REQUEST" }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return NextResponse.json({ code: "INVALID_REQUEST" }, { status: 400 });
  }

  const name = typeof payload.name === "string"
    ? payload.name.trim().replace(/[\r\n]+/g, " ").slice(0, 100)
    : "";
  const email = typeof payload.email === "string" ? payload.email.trim().slice(0, 254) : "";
  const userType = typeof payload.userType === "string" ? payload.userType : "";
  const message = typeof payload.message === "string" ? payload.message.trim().slice(0, 2000) : "";
  const language = payload.language === "en" ? "en" : payload.language === "tr" ? "tr" : "";
  const privacyConsent = payload.privacyConsent === true;

  if (
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !allowedUserTypes.has(userType) ||
    !language ||
    !privacyConsent
  ) {
    return NextResponse.json({ code: "INVALID_REQUEST" }, { status: 400 });
  }

  const emailUser = process.env.EMAIL_USER?.trim();
  const emailAppPassword = process.env.EMAIL_APP_PASSWORD;
  if (!emailUser || !emailAppPassword) {
    return NextResponse.json({ code: "CONTACT_UNAVAILABLE" }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailAppPassword,
      },
    });

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      subject: "İşYolum - Yeni Kapalı Test Talebi: " + (name || "İsimsiz"),
      text: [
        "İşYolum kapalı test talebi:",
        "",
        "Ad: " + (name || "Belirtilmedi"),
        "E-posta: " + email,
        "Kullanım tipi: " + userType,
        "Dil: " + language,
        "",
        "Mesaj:",
        message || "Mesaj yok",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json({ code: "DELIVERY_FAILED" }, { status: 500 });
  }
}
