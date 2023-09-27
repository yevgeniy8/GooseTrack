import PropTypes from 'prop-types';
import { ButtonLogout } from './LogoutBtn.styled';

const LogoutBtn = ({ text, onClick }) => {
    return (
        <ButtonLogout variant="contained" onClick={onClick}>
            LogOut
        </ButtonLogout>
    );
};

LogoutBtn.propTypes = {
    onClick: PropTypes.func,
};

export default LogoutBtn;
