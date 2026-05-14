import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Base from "./Base.tsx";
import '../assets/fonts/fonts.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Base/>
  </StrictMode>
)
