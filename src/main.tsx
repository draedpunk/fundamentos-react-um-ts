import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

console.log("O React está rodando!");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
