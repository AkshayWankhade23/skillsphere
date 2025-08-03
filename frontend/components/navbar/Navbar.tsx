'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthProvider';

const Navbar = () => {
  const { user, logout } = useAuth();

  if (!user) return null; // Don’t show navbar when not logged in

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        {user.role === 'admin' && (
          <>
            <Link href="/admin/dashboard">Admin Dashboard</Link>
            <Link href="/admin/users">Manage Users</Link>
          </>
        )}
        {user.role === 'user' && (
          <>
            <Link href="/user/dashboard">User Dashboard</Link>
            <Link href="/user/roadmaps">My Roadmaps</Link>
            <Link href="/user/skills">My Skills</Link>
          </>
        )}
      </div>

      <div className="flex gap-4 items-center">
        <span>{user.name}</span>
        <button
          onClick={logout}
          className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
