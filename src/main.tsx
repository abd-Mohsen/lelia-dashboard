import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <ReactQueryDevtools/> */}
  </React.StrictMode>,
)
