// // // pages/admindash.tsx

// // pages/admindash.tsx
// 'use client';

// import React from 'react';

// import Dashboard from '../../components/Dashboard/Dashboard';

// const AdminDashPage = () => {
//   return <Dashboard />;
// };

// export default AdminDashPage;

'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../lib/context/AuthContext';
import Dashboard from '../../components/Dashboard/Dashboard';

const AdminDashPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signin');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <Dashboard /> : null;
};

export default AdminDashPage;
