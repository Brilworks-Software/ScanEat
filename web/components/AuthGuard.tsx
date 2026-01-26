'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsChecking(false);
      
      // Public routes that don't require authentication
      const publicRoutes = ['/login', '/signup', '/forgot-password', '/privacy-policy'];
      const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));
      
      // Auth-related routes that should redirect logged-in users to home
      const authRoutes = ['/login', '/signup', '/forgot-password'];
      const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

      if (user) {
        // User is logged in
        // If on auth-related pages (login/signup), redirect to home
        // But allow access to other public routes like privacy-policy
        if (isAuthRoute) {
          router.push('/');
        }
      } else {
        // User is not logged in
        // If not on a public route, redirect to login
        if (!isPublicRoute) {
          router.push('/login');
        }
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  // Show loading state while checking auth
  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block mb-4">
            <img 
              src="/favicon.png" 
              alt="Loading" 
              className="w-16 h-16 animate-spin rounded-full"
            />
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

