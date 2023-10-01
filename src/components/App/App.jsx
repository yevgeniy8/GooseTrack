// import { Route, Routes } from 'react-router-dom';
// import MainPage from 'pages/MainPage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';

// import MainLayout from '../MainLayout';

// export const App = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<MainPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             {/* тимчасовий роут для сторінки юзера */}
//             <Route path="/user" element={<MainLayout />}></Route>
//         </Routes>
//     );
// };


import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import MainLayout from '../MainLayout';
import { FeedbackModal } from '../FeedbackForm/FeedbackModal'; // Імпортуємо компонент FeedbackModal
import { useState } from 'react';
export const App = () => {
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

    const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false);
    };

    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* тимчасовий роут для сторінки юзера */}
                <Route path="/user" element={<MainLayout />} />
            </Routes>

            {/* Додайте кнопку, яка відкриває модальне вікно */}
            <button onClick={openFeedbackModal}>Зв'язатися</button>

            {/* Відобразіть модальне вікно, якщо isFeedbackModalOpen === true */}
            {isFeedbackModalOpen && (
                <FeedbackModal onClose={closeFeedbackModal} />
            )}
        </div>
    );
};
