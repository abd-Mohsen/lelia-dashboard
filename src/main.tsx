import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App/> 
        <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
