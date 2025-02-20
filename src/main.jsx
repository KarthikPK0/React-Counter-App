import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import counterStore from './redux/counterStore.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={counterStore}>
     <App />
    </Provider>
   
  </React.StrictMode>,
)
