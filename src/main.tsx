import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import App from './App';

gsap.registerPlugin(useGSAP);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
