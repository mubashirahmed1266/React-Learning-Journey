import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './practice2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)