import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/index.ts'
import { Toaster } from 'sonner'
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Toaster position="top-center" richColors  />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
)
