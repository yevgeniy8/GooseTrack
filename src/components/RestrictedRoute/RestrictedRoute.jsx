import React from 'react';

import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
