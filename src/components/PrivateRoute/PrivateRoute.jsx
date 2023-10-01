import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRestrict = !isRefreshing && !isLoggedIn;

    return shouldRestrict ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
