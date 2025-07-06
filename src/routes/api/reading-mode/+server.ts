import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request, cookies }) => {
  const data = await request.json();
  const readingMode = data.readingMode;
  cookies.set("readingMode", readingMode.toString(), {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 315360000000,
  });

  return new Response(String(readingMode));
};
