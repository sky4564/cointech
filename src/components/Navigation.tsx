'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import LoginModal from './LoginModal';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  // 디버깅용 로그
  useEffect(() => {
    console.log('Navigation user state:', user);
  }, [user]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <nav className="border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                CoinTech
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/trade"
                className="rounded-md px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                거래
              </Link>
              <Link
                href="/portfolio"
                className="rounded-md px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                포트폴리오
              </Link>
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-300">{user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="rounded-md bg-gray-800 px-4 py-2 font-medium hover:bg-gray-700 transition-colors"
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 transition-colors"
                >
                  로그인
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
} 