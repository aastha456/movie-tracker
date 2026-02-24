import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './reset.css'
import App from './App.tsx'
import { MovieContextProvider } from './context/MovieContextProvider.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>

    </BrowserRouter>
    
    
  </StrictMode>,
)
