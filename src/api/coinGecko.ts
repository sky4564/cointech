import { CoinData } from '@/types/coin';

export const getCoinsData = async (): Promise<CoinData[]> => {
  const response = await fetch('/api/coins');
  if (!response.ok) {
    throw new Error('Failed to fetch coin data');
  }
  return response.json();
}; 