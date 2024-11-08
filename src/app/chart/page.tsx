'use client';

import { useState } from 'react';
import TradingViewChart from '@/components/TradingViewChart';

const AVAILABLE_COINS = [
  { id: 'BTC', name: '비트코인' },
  { id: 'ETH', name: '이더리움' },
  { id: 'XRP', name: '리플' }
];

export default function ChartPage() {
  const [selectedCoin, setSelectedCoin] = useState(AVAILABLE_COINS[0].id);

  return (
    <main className="h-[calc(100vh-4rem)]">
      <div className="h-full p-4 sm:p-6 lg:p-8">
        <div className="glass-effect h-full rounded-2xl p-6 flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h1 className="text-2xl font-bold">실시간 차트</h1>
            <div className="flex gap-2">
              {AVAILABLE_COINS.map((coin) => (
                <button
                  key={coin.id}
                  onClick={() => setSelectedCoin(coin.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedCoin === coin.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800/50 hover:bg-gray-800'
                    }`}
                >
                  {coin.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden bg-gray-900/50">
            <TradingViewChart symbol={selectedCoin} />
          </div>
          <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">차트 사용 가이드</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• 상단 도구 모음을 사용하여 다양한 지표를 추가할 수 있습니다.</li>
              <li>• 차트 우측의 도구를 사용하여 기술적 분석을 진행할 수 있습니다.</li>
              <li>• 시간대 변경은 상단 메뉴에서 가능합니다.</li>
              <li>• 차트 스타일은 캔들, 라인 등 다양한 옵션을 제공합니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 