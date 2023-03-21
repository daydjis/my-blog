import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import App from './index.js';
import './index.css';
import store from './store/store.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)

