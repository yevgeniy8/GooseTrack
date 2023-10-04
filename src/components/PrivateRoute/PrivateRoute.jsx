import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRestrict = !isRefreshing && !isLoggedIn;

    return shouldRestrict ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
