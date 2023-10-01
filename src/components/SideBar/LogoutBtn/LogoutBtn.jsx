import PropTypes from 'prop-types';
import Icons from '../../../images/icons.svg';
import { ButtonLogout, Icon } from './LogoutBtn.styled';

const LogoutBtn = ({ onClick }) => {
    return (
        <ButtonLogout variant="contained" onClick={onClick}>
            LogOut
            <Icon>
                <use href={`${Icons}#log-out`} />
            </Icon>
        </ButtonLogout>
    );
};

LogoutBtn.propTypes = {
    onClick: PropTypes.func,
};

export default LogoutBtn;
