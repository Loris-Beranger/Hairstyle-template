'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
      staleTime: 0,
      refetchOnWindowFocus: false,
      structuralSharing: false,
    },
  },
})

type Props = {
  children: React.ReactNode
}

const ReactQueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default ReactQueryWrapper
