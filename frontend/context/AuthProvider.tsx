'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getMe, api } from '@/lib/api';
import { User } from '@/types/auth';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Check for browser environment before accessing localStorage
        if (typeof window !== 'undefined') {
          console.log('AuthProvider: Attempting to fetch user data');
          
          // First check localStorage directly
          const userString = localStorage.getItem('user');
          const token = localStorage.getItem('accessToken');
          
          if (token && userString) {
            try {
              console.log('AuthProvider: Found user in localStorage');
              const userData = JSON.parse(userString);
              setUser(userData);
              return;
            } catch (e) {
              console.error('AuthProvider: Error parsing user JSON', e);
              // Continue to API call if JSON parsing fails
            }
          }
          
          // If we get here, we need to call the API
          console.log('AuthProvider: Calling getMe API');
          const res = await getMe();
          console.log('AuthProvider: API response', res);
          setUser(res.user);
        }
      } catch (err) {
        console.error('Error in auth provider:', err);
        setUser(null);
        
        // If there's an auth error and we're not already on the login page, redirect
        if (typeof window !== 'undefined' && 
            !window.location.pathname.includes('/login') && 
            !window.location.pathname.includes('/register')) {
          console.log('AuthProvider: Redirecting to login due to auth error');
          router.push('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    
    // Listen for storage events to sync auth state across tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'user' && event.newValue) {
        try {
          setUser(JSON.parse(event.newValue));
        } catch (e) {
          console.error('Error parsing user from storage event', e);
        }
      } else if (event.key === 'user' && !event.newValue) {
        setUser(null);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, [router]);

  const logout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    
    // Call logout API if needed
    api.post('/auth/logout')
      .catch((err: Error) => console.error('Logout error:', err))
      .finally(() => {
        setUser(null);
        router.push('/login');
      });
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
