import React from 'react';
import './i18n';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LanguageProvider } from './components/context/LanguageContext';
import { AuthProvider } from './components/context/AuthContext';

async function enableMocks() {
  if (process.env.NODE_ENV === "development") {
    try {
      const { worker } = await import("./mocks/browser");
      return await worker.start();
    } catch (error) {
      console.error("Failed to start MSW:", error);
    }
  }
}

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <LanguageProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LanguageProvider>
    </React.StrictMode>
  );
};

enableMocks().finally(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
