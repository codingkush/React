import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* Wrapping the App component with Provider 
        so that the centralized Redux store 
        is accessible throughout the entire application */}
      <App />
    </Provider>
  </StrictMode>,
)
