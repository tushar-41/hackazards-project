import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DailyDataProvider } from './context/DailyDataContext';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


createRoot(document.getElementById('root')).render(
<StrictMode>
<DailyDataProvider>
<App />
</DailyDataProvider>
</StrictMode>,
)
