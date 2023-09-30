import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

import MainLayout from '../MainLayout';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* тимчасовий роут для сторінки юзера */}
            <Route path="/user" element={<MainLayout />}></Route>
        </Routes>
    );
};
