import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';

export const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<div>Register</div>} />
            <Route path="/login" element={<div>Login</div>} />

            <Route path="/" element={<MainPage />} />

            {/* Додайте кнопку або елемент, який відкриватиме модальне вікно */}
            <Route
                path="/"
                element={
                    <button onClick={() => setIsModalOpen(true)}>
                        Відкрити модальне вікно
                    </button>
                }
            />

            {/* Показуйте компонент FeedbackForm, якщо isModalOpen === true */}
            {isModalOpen && (
                <FeedbackForm onClose={() => setIsModalOpen(false)} />
            )}
        </Routes>
    );
};
