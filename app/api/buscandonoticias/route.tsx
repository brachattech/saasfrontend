export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "urbanismo";

  const API_KEY = process.env.GNEWS_API_KEY;

  if (!API_KEY) {
    console.error("❌ GNEWS_API_KEY está indefinida no ambiente!");
    return new Response(JSON.stringify({ error: "Chave não encontrada" }), { status: 500 });
  }

  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=pt&country=br&max=5&token=${API_KEY}`;
  console.log("🔑 Usando API KEY:", API_KEY);

  try {
    const response = await fetch(url);
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("❌ Erro ao buscar notícias:", error);
    return new Response(JSON.stringify({ error: "Erro interno" }), { status: 500 });
  }
}



