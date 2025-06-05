// ... (imports)

export async function GET(req: NextRequest) {
  // ... (search params parsing)

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // <-- REQUIRED HERE

  if (!apiKey) {
    console.error('NEXT_PUBLIC_WEATHER_API_KEY is not set in .env.local');
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  // ... (API URL construction using apiKey)
  // ... (axios.get call)
}