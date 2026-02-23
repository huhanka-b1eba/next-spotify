'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient } from '@tanstack/query-core'

interface ProvidersProps {
    children: React.ReactNode
}

const queryClient = new QueryClient()

export default function Providers({ children }: ProvidersProps) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                {children}
            </QueryClientProvider>
        </>
    )
}
