import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';

import useAuth from 'hooks/useAuth';

import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import MainLayout from '../MainLayout';

import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/authOperations';

import Spinner from 'components/Spinner/Spinner';

// import MainPage from 'pages/MainPage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';
// import AccountPage from 'pages/AccountPage';
// import CalendarPage from 'pages/CalendarPage';
// import ErrorPage from 'pages/ErrorPage';
// import StatisticsPage from 'pages/StatisticsPage';

// import ChoosedDay from 'components/Calendar/ChoosedDay/ChoosedDay';
// import ChoosedMonth from 'components/Calendar/ChoosedMonth/ChoosedMonth';

const MainPage = lazy(() => import('pages/MainPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const ChoosedDay = lazy(() =>
    import('components/Calendar/ChoosedDay/ChoosedDay')
);
const ChoosedMonth = lazy(() =>
    import('components/Calendar/ChoosedMonth/ChoosedMonth')
);

export const App = () => {
    const { isRefreshing, isCompeteLoading } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    // return isRefreshing  ? (
    //     <b>Refreshing user...</b>
    // ) : (
    // <Spinner />
    return (
        isCompeteLoading &&
        !isRefreshing && (
            <Suspense fallback={null}>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route
                        path="/register"
                        element={
                            <RestrictedRoute
                                redirectTo="/calendar"
                                component={<RegisterPage />}
                            />
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            <RestrictedRoute
                                redirectTo="/calendar"
                                component={<LoginPage />}
                            />
                        }
                    />

                    <Route path="/" element={<MainLayout />}>
                        <Route
                            path="account"
                            element={
                                <PrivateRoute
                                    component={<AccountPage />}
                                    redirectTo="/login"
                                />
                            }
                        />

                        <Route
                            path="calendar"
                            element={
                                <PrivateRoute
                                    component={<CalendarPage />}
                                    redirectTo="/login"
                                />
                            }
                        >
                            <Route
                                path="month/:currentDate"
                                element={
                                    <PrivateRoute
                                        component={<ChoosedMonth />}
                                        redirectTo="/login"
                                    />
                                }
                            />
                            <Route
                                path="day/:currentDay"
                                element={
                                    <PrivateRoute
                                        component={<ChoosedDay />}
                                        redirectTo="/login"
                                    />
                                }
                            />
                        </Route>

                        <Route
                            path="statistics"
                            element={
                                <PrivateRoute
                                    redirectTo="/login"
                                    component={<StatisticsPage />}
                                />
                            }
                        />
                    </Route>

                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        )
    );
};
