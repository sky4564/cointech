import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 히어로 섹션 */}
      <section className="flex-1 min-h-[70vh] w-full flex items-center py-8 sm:py-12">
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
                <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  거래소 둘러보기
                </button>
                <button className="w-full sm:w-auto px-6 py-3 border border-blue-600 rounded-lg font-medium hover:bg-blue-600/10 transition-colors">
                  회원가입
                </button>
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6 w-full max-w-xl mx-auto lg:max-w-none">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">실시간 인기 코인</h3>
                <div className="space-y-3">
                  {['Bitcoin', 'Ethereum', 'Ripple'].map((coin) => (
                    <div key={coin} className="flex items-center justify-between p-4 hover:bg-gray-800/50 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                        <span>{coin}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-green-500">+2.34%</div>
                        <div className="text-sm text-gray-400">₩43,150,000</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="min-h-[30vh] w-full glass-effect flex items-center py-12 sm:py-16">
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
            <div className="p-6 rounded-xl hover:bg-gray-800/30 transition-colors text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center mx-auto">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">실시간 차트</h3>
              <p className="text-gray-400">
                전문적인 차트와 시장 분석 도구로 투자 결정을 지원합니다
              </p>
            </div>
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
    </main>
  );
} 