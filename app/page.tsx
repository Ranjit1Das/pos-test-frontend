'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../lib/context/AuthContext';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/admindash'); // Redirect to dashboard if logged in
    } else {
      router.replace('/signin'); // Redirect to login page if not logged in
    }
  }, [isAuthenticated, router]);

  return <div>Redirecting...</div>; // Displayed briefly before redirection
}
