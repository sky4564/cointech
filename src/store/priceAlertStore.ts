import { create } from 'zustand'

interface PriceAlert {
  id: string;
  coinName: string;
  currentPrice: number;
  priceChanged: boolean;
  previousPrice?: number;
  timestamp: Date;
}

interface PriceAlertStore {
  alerts: PriceAlert[];
  isModalOpen: boolean;
  addAlert: (alert: Omit<PriceAlert, 'id'>) => void;
  closeModal: () => void;
  clearAlerts: () => void;
}

// 고유 ID 생성 함수
const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const usePriceAlertStore = create<PriceAlertStore>((set) => ({
  alerts: [],
  isModalOpen: false,
  addAlert: (alert) => set((state) => ({
    alerts: [
      {
        ...alert,
        id: generateUniqueId() // 타임스탬프와 랜덤 문자열을 조합한 고유 ID
      },
      ...state.alerts
    ],
    isModalOpen: true
  })),
  closeModal: () => set({ isModalOpen: false }),
  clearAlerts: () => set({ alerts: [] })
})); 