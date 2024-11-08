import { NextResponse } from 'next/server';

interface CoinGeckoMarketData {
  id: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

export async function GET() {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?' + new URLSearchParams({
        vs_currency: 'krw',
        ids: 'bitcoin,ethereum,ripple',
        order: 'market_cap_desc',
        per_page: '3',
        page: '1',
        sparkline: 'false'
      }),
      {
        next: { revalidate: 10 },
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59'
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('CoinGecko API Error:', errorText);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    const formattedData = data.map((coin: CoinGeckoMarketData) => ({
      id: coin.id,
      name: coin.name,
      current_price: coin.current_price,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      image: coin.image
    }));

    return NextResponse.json(formattedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59'
      }
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  }
} 