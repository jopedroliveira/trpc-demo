type Fruit = { id: number; name: string };

const fruits: Fruit[] = [];

export async function GET(request: Request) {
  return new Response(JSON.stringify(fruits));
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    fruits.push({ id: fruits.length + 1, name: body.name });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Bad Request' }), {
      status: 400,
    });
  }
  return new Response(JSON.stringify({ message: `${body.name} added` }));
}
