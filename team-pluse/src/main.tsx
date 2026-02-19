import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css' // Your global styles
import { CheckInProvider } from './context/CheckInContext'

// This line finds the <div id="root"> in your index.html file
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* We wrap the App in the Provider here */}
    <CheckInProvider>
      <App />
    </CheckInProvider>
  </React.StrictMode>,
)