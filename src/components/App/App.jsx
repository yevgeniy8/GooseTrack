import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';

import useAuth from 'hooks/useAuth';

import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/authOperations';
import { Container } from 'styles/Container';
import Spinner from '../Spinner/Spinner';

const MainLayout = lazy(() => import('../MainLayout'));
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
    const { isRefreshing } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return !isRefreshing ? (
        <Container>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route
                        index
                        element={
                            <RestrictedRoute
                                redirectTo="/calendar"
                                component={<MainPage />}
                            />
                        }
                    />
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
        </Container>
    ) : (
        <Spinner />
    );
};
