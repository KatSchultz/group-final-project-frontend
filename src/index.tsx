import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryClientProvider } from './libs/react-query';
import { AuthContextProvider } from './context/auth.context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactQueryClientProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ReactQueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

