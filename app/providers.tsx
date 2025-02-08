'use client';
import { NextUIProvider } from '@nextui-org/react';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { customStyles } from '../src/shared/styles/notistackStyles';
import Activity from '@/src/shared/auth/components/Activity';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <SnackbarProvider Components={customStyles}>
            <Activity />
            {children}
          </SnackbarProvider>
        </NextUIProvider>
      </QueryClientProvider>
  );
}
