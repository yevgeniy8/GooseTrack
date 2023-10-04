import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';

import useAuth from 'hooks/useAuth';

import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import MainLayout from '../MainLayout';

import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/authOperations';

// import MainPage from 'pages/MainPage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';
// import AccountPage from 'pages/AccountPage';
// import CalendarPage from 'pages/CalendarPage';
// import ErrorPage from 'pages/ErrorPage';
// import StatisticsPage from 'pages/StatisticsPage';

import ChoosedDay from 'components/Calendar/ChoosedDay/ChoosedDay';
import ChoosedMonth from 'components/Calendar/ChoosedMonth/ChoosedMonth';

const MainPage = lazy(() => import('pages/MainPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));

export const App = () => {
    const { isRefreshing } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/register" element={<RegisterPage />} />
                {/* <Route path="/login" element={<LoginPage />} /> */}

                {/* тимчасовий роут для сторінки юзера */}
                {/* <Route path="/user" element={<MainLayout />} /> */}

                <Route
                    path="/login"
                    element={
                        <RestrictedRoute
                            redirectTo="/calendar"
                            component={LoginPage}
                        />
                    }
                />

                <Route
                    path="/"
                    element={
                        <PrivateRoute
                            redirectTo="/login"
                            component={MainLayout}
                        />
                    }
                >
                    {/* <Route index element={<AccountPage />} /> */}
                    <Route path="account" element={<AccountPage />} />

                    {/* <Route path="calendar" element={<CalendarPage />} />
                    <Route
                        path="calendar/month/:currentDate"
                        element={<CalendarPage />}
                    />
                    <Route
                        path="calendar/day/:currentDay"
                        element={<CalendarPage />}
                    /> */}

                    <Route
                        path="calendar"
                        element={
                            <PrivateRoute
                                component={CalendarPage}
                                redirectTo="/login"
                            />
                        }
                    >
                        <Route
                            path="month/:currentDate"
                            element={<ChoosedMonth />}
                        />
                        <Route
                            path="day/:currentDay"
                            element={<ChoosedDay />}
                        />
                    </Route>

                    <Route
                        path="statistics"
                        element={
                            <PrivateRoute
                                redirectTo="/login"
                                component={StatisticsPage}
                            />
                        }
                    />
                </Route>

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Suspense>
    );
};
