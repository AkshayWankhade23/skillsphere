"use client";

import Navbar from '@/components/navbar/Navbar';
import { useAuth } from '@/context/AuthProvider';
import { redirect } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user || user.role !== 'admin') return redirect('/login');

  return (
    <div className="admin-layout">
      <Navbar />
      {children}
    </div>
  );
}
