'use client'
import {NextUIProvider} from '@nextui-org/react'
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { customStyles } from '../src/shared/styles/notistackStyles'

const queryClient = new QueryClient();

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                <SnackbarProvider Components={customStyles} >
                    {children}
                </SnackbarProvider>
            </NextUIProvider>
        </QueryClientProvider>
    )
}