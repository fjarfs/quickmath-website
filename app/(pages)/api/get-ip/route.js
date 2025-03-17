export async function GET(req) {
  const headers = req.headers;
  const forwarded = headers.get("x-forwarded-for") || "";
  let ip = forwarded.split(",")[0] || headers.get("x-real-ip") || req.socket?.remoteAddress || "Unknown";

  // Jika IP dalam format IPv6 (::1), ubah ke 127.0.0.1
  if (ip === "::1") ip = "127.0.0.1";

  return new Response(JSON.stringify({ ip }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}