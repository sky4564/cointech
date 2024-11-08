import { usePriceAlertStore } from '@/store/priceAlertStore';
import { useEffect, useRef, useState } from 'react';

export default function PriceAlertModal() {
  const { alerts, isModalOpen, closeModal } = usePriceAlertStore();
  const [displayedAlerts, setDisplayedAlerts] = useState<typeof alerts>([]);
  const [page, setPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 10;

  // 초기 데이터 로드 및 새 알림 추가시 업데이트
  useEffect(() => {
    setDisplayedAlerts(alerts.slice(0, page * ITEMS_PER_PAGE));
  }, [alerts, page]);

  // 스크롤 이벤트 처리
  const handleScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 20) { // 하단에서 20px 남았을 때
      if (displayedAlerts.length < alerts.length) {
        setPage(prev => prev + 1);
      }
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl max-w-md w-full mx-4 border border-gray-800 max-h-[80vh] flex flex-col">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span>가격 변동 알림</span>
          <span className="ml-2 text-sm text-red-400 animate-pulse">
            {alerts.length}개의 변동 감지
          </span>
        </h2>
        <div
          ref={containerRef}
          className="space-y-3 overflow-y-auto flex-1 pr-2 custom-scrollbar"
          onScroll={handleScroll}
        >
          {displayedAlerts.map((alert) => (
            <div
              key={alert.id}
              className="p-3 rounded-lg bg-red-900/50 border border-red-500/50"
            >
              <div className="font-medium flex justify-between items-center">
                <span>{alert.coinName}</span>
                <span className="text-xs text-red-400">가격 변동!</span>
              </div>
              <div className="text-sm">
                <span className="text-red-400 text-xs">
                  ₩{alert.previousPrice?.toLocaleString()} →
                </span>
                <span className="ml-2">
                  ₩{alert.currentPrice.toLocaleString()}
                </span>
                <span className="text-xs text-red-400 ml-2">
                  {((alert.currentPrice - (alert.previousPrice || 0)) / (alert.previousPrice || 1) * 100).toFixed(2)}% 변동
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {new Date(alert.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={closeModal}
          className="mt-4 w-full px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
} 