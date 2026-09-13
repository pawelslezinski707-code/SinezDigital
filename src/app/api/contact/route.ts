import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Uzupełnij wymagane pola formularza." },
      { status: 400 }
    );
  }

  // TODO: podłącz docelową usługę wysyłki maili, np. Formspree lub Resend.
  //
  // Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Sinez Digital <formularz@sinezdigital.pl>",
  //   to: "kontakt@sinezdigital.pl",
  //   subject: `Nowa wiadomość: ${subject ?? "Kontakt ze strony"}`,
  //   text: `Od: ${name} (${email})\n\n${message}`,
  // });
  //
  // Formspree: zamień akcję formularza na endpoint Formspree
  // (np. https://formspree.io/f/twoje-id) i wysyłaj request bezpośrednio z frontendu,
  // pomijając ten route.

  console.log("Nowa wiadomość z formularza kontaktowego:", {
    name,
    email,
    subject,
    message,
  });

  return NextResponse.json({ ok: true });
}
