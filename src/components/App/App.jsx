import { Route, Routes } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

import MainLayout from '../MainLayout';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { refreshUser } from 'redux/auth/authOperations';

import Spinner from 'components/Spinner/Spinner';

// import Notiflix from 'notiflix';

export const App = () => {
    const { isRefreshing } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        // <b>Refreshing user...</b>
        <Spinner />
    ) : (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}

            {/* тимчасовий роут для сторінки юзера */}
            {/* <Route path="/user" element={<MainLayout />} /> */}

            <Route
                path="/login"
                element={
                    <RestrictedRoute redirectTo="/user" component={LoginPage} />
                }
            />
            <Route
                path="/user"
                element={
                    <PrivateRoute redirectTo="/login" component={MainLayout} />
                }
            />
        </Routes>
    );
};
