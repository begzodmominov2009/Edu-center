import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import ChangeLanguageContext from './context/Language.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChangeLanguageContext>
      <App />
    </ChangeLanguageContext>
    <ToastContainer />
  </StrictMode>,
)
