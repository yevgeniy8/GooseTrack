import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/Header/ThemeToggler/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter basename="/GooseTrack">
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
