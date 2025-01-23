'use client';
import Category from '@/src/category';
import { useUserAuthStore } from '@/src/shared/store/userAuthStore';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
  const { userInfo } = useUserAuthStore();
  const router = useRouter();
  if (!userInfo.roles!.includes('ROLE_ADMIN')) router.push('/accessDenied');
  
  return (
    <Category />
  );
}