'use client';

import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getCoinsData } from '@/api/coinGecko';
import { CoinData } from '@/types/coin';
import { usePriceAlertStore } from '@/store/priceAlertStore';
import PriceAlertModal from '@/components/PriceAlertModal';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ParticlesBackground from '@/components/ParticlesBackground';
import LoginModal from '@/components/LoginModal';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const { data: coins, isLoading, error } = useQuery<CoinData[]>({
    queryKey: ['coins'],
    queryFn: getCoinsData,
  });

  const { user } = useAuth();

  const prevPrices = useRef<{ [key: string]: number }>({});
  const addAlert = usePriceAlertStore(state => state.addAlert);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    if (coins) {
      const changedCoins = coins.filter(coin => {
        const prevPrice = prevPrices.current[coin.id];
        const hasChanged = prevPrice !== undefined && prevPrice !== coin.current_price;
        prevPrices.current[coin.id] = coin.current_price;
        return hasChanged;
      });

      if (changedCoins.length > 0) {
        changedCoins.forEach(coin => {
          addAlert({
            coinName: coin.name,
            currentPrice: coin.current_price,
            priceChanged: true,
            previousPrice: prevPrices.current[coin.id],
            timestamp: new Date()
          });
        });
      }
    }
  }, [coins, addAlert]);

  return (
    <main className="min-h-screen flex flex-col relative">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 pointer-events-none" />
      <PriceAlertModal />
      {/* 히어로 섹션 */}
      <section className="relative flex-1 min-h-[70vh] w-full flex items-center py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                가장 신뢰받는 <span className="text-blue-500">디지털 자산 거래소</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                안전하고 신속한 거래와 함께 24시간 실시간 모니터링으로
                여러분의 자산을 안전하게 보호합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/chart"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  실시간 차트
                </Link>
                {!user && (
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="w-full sm:w-auto px-6 py-3 border border-blue-600 rounded-lg font-medium hover:bg-blue-600/10 transition-colors"
                  >
                    회원가입
                  </button>
                )}
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6 w-full max-w-xl mx-auto lg:max-w-none">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">실시간 인기 코인</h3>
                <div className="space-y-3">
                  {isLoading ? (
                    <div className="text-center py-4">Loading...</div>
                  ) : error ? (
                    <div className="text-center py-4 text-red-500">
                      데이터를 불러오는데 실패했습니다
                    </div>
                  ) : coins ? (
                    coins.map((coin) => (
                      <div key={coin.id} className="flex items-center justify-between p-4 hover:bg-gray-800/50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <Image
                            src={coin.image}
                            alt={coin.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <span>{coin.name}</span>
                        </div>
                        <div className="text-right">
                          <div className={`${coin.price_change_percentage_24h >= 0
                            ? 'text-green-500'
                            : 'text-red-500'
                            }`}>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                          </div>
                          <div className="text-sm text-gray-400">
                            ₩{coin.current_price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="relative min-h-[30vh] w-full glass-effect flex items-center py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
            CoinTech의 특별함
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-xl hover:bg-gray-800/30 transition-colors text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center mx-auto">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">강력한 보안</h3>
              <p className="text-gray-400">
                다중 보안 시스템과 콜드월렛 보관으로 안전한 거래 환경을 제공합니다
              </p>
            </div>
            <Link
              href="/chart"
              className="p-6 rounded-xl hover:bg-gray-800/30 transition-colors text-center cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">실시간 차트</h3>
              <p className="text-gray-400">
                전문적인 차트와 시장 분석 도구로 투자 결정을 지원합니다
              </p>
            </Link>
            <div className="p-6 rounded-xl hover:bg-gray-800/30 transition-colors text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center mx-auto">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">다양한 자산</h3>
              <p className="text-gray-400">
                검증된 디지털 자산을 엄선하여 다양한 투자 기회를 제공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </main>
  );
} 