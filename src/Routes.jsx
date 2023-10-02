import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { selectIsRefreshing } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
