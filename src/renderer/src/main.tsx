// Renderer entry point.
// main.css is the full CodeMaster design system (all tokens, components, utilities).
// theme.css is kept for any legacy class references — it now just re-exports main.css vars.
import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
