import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import { store } from './store/store'
import "virtual:svg-icons-register";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

