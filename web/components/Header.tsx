'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Clock, BarChart3, User as UserIcon, LogOut, Menu, X } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const confirm = window.confirm('Are you sure you want to log out?');
      if (!confirm) {

        setIsLoggingOut(false);
        return;
      }
      await signOut(auth);
      router.push('/login');
    } catch (error: any) {
      console.error('Error signing out:', error);
      alert('Failed to sign out. Please try again.');
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/favicon.png" alt="Logo" className="w-16 h-16" />
              <button
                onClick={() => router.push('/')}
                className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Scaneat
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-4">
              <button
                onClick={() => router.push('/history')}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
              >
                <Clock className="w-5 h-5" />
                <span>History</span>
              </button>
              <button
                onClick={() => router.push('/nutrition-analysis')}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Nutrition Analysis</span>
              </button>
            </nav>
          </div>

          {/* Right side: Mobile Menu Button + User Info */}
          <div className="flex items-center gap-4">
            {/* User Email - Hidden on very small screens */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
              <UserIcon className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700 font-medium truncate max-w-[150px]">
                {user.email}
              </span>
            </div>

            {/* Logout Button - Hidden on very small screens */}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
            >
              {isLoggingOut ? (
                <>
                  <img 
                    src="/favicon.png" 
                    alt="Loading" 
                    className="animate-spin h-4 w-4"
                  />
                  <span>Logging out...</span>
                </>
              ) : (
                <>
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Positioned as overlay dropdown */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg z-50">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {/* Navigation Links */}
              <button
                onClick={() => {
                  router.push('/history');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-left"
              >
                <Clock className="w-5 h-5" />
                <span>History</span>
              </button>
              <button
                onClick={() => {
                  router.push('/nutrition-analysis');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-left"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Nutrition Analysis</span>
              </button>

              {/* Divider */}
              <div className="border-t border-gray-200 pt-3">
                {/* User Email */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg mb-3">
                  <UserIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700 font-medium truncate">
                    {user.email}
                  </span>
                </div>

                {/* Logout Button */}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  disabled={isLoggingOut}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isLoggingOut ? (
                    <>
                      <img 
                        src="/favicon.png" 
                        alt="Loading" 
                        className="animate-spin h-5 w-5"
                      />
                      <span>Logging out...</span>
                    </>
                  ) : (
                    <>
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

