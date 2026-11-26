import { NextResponse } from "next/server";

// Zapasowy endpoint: działa tylko lokalnie, gdy nie ustawiono NEXT_PUBLIC_FORMSPREE_ENDPOINT.
// Na produkcji formularz wysyła wiadomości przez Formspree.
export async function POST(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Uzupełnij wymagane pola formularza." },
      { status: 400 }
    );
  }

  console.log("Nowa wiadomość z formularza (tryb deweloperski):", body);
  return NextResponse.json({ ok: true });
}
