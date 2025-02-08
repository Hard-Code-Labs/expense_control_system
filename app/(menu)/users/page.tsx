'use client';
import React from 'react';
import { useUserAuthStore } from '@/src/shared/store/userAuthStore';
import AccessDenied from '@/src/statusPages/AccessDenied';

const Page = () => {
  const { userInfo } = useUserAuthStore();
  const isAdmin = userInfo.roles!.includes('ROLE_ADMIN');
  return (
    <> { isAdmin ? <h1>Users Admin</h1> : <AccessDenied /> } </>
  );
};

export default Page;