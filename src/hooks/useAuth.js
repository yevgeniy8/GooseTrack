import { useSelector } from 'react-redux';

const useAuth = () => {
    const user = useSelector(state => state.auth.user);
    // const userAvatar = useSelector(state => state.auth.user.userAvatar);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isRefreshing = useSelector(state => state.auth.isRefreshing);
    const isCompeteLoading = useSelector(state => state.auth.isCompeteLoading);

    return { user, isLoggedIn, isRefreshing, isCompeteLoading };
};

export default useAuth;
