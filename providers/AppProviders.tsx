"use client";

import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

interface AppProvidersProps {
    children: ReactNode
}

export default function AppProviders({ children }: AppProvidersProps) {
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
            {children}
            <Toaster richColors position="top-right" />
        </ThemeProvider>
    )
}
