"use client";

import Navbar from '@/components/navbar/Navbar';
import { useAuth } from '@/context/AuthProvider';
import { redirect } from 'next/navigation';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user || user.role !== 'user') return redirect('/login');

  return (
    <div className="user-layout">
      <Navbar />
      {children}
    </div>
  );
}
