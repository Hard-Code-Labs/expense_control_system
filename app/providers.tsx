'use client'
import {NextUIProvider} from '@nextui-org/react'
import { SnackbarProvider } from 'notistack'

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <SnackbarProvider>
                {children}
            </SnackbarProvider>
        </NextUIProvider>
    )
}