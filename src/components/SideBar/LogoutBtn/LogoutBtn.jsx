import { useDispatch } from 'react-redux';
import Icons from '../../../images/icons.svg';
import { logout } from '../../../redux/auth/authOperations';
import { ButtonLogout, Icon } from './LogoutBtn.styled';

const LogoutBtn = () => {
    const dispatch = useDispatch();
    return (
        <ButtonLogout
            type="button"
            text="Logout"
            onClick={() => dispatch(logout())}
        >
            LogOut
            <Icon>
                <use href={`${Icons}#log-out`} />
            </Icon>
        </ButtonLogout>
    );
};

export default LogoutBtn;
