// lib/api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api', // your Express backend base URL
  withCredentials: true, // important if you're using cookies
});

export const getMe = async () => {
  const res = await fetch('/api/auth/me', {
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Not Authenticated');
  return res.json();
};
