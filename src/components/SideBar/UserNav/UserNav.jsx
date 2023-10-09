import {
    NavWrap,
    NavTitle,
    Link,
    Item,
    List,
    Icon,
    IconStat,
} from './UserNav.styled';
import Icons from '../../../images/icons.svg';

const UserNav = ({ onCloseClick }) => {
    return (
        <NavWrap>
            <NavTitle>User Panel</NavTitle>
            <List>
                <Item>
                    <Link to="account" onClick={onCloseClick}>
                        <Icon>
                            <use href={`${Icons}#user-check`} />
                        </Icon>
                        <span>My account</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="calendar" onClick={onCloseClick}>
                        <Icon>
                            <use href={`${Icons}#calendar-check`} />
                        </Icon>
                        <span>Calendar</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="statistics" onClick={onCloseClick}>
                        <IconStat fill="inherit">
                            <use href={`${Icons}#chart-statistics`} />
                        </IconStat>
                        <span>Statistics</span>
                    </Link>
                </Item>
            </List>
        </NavWrap>
    );
};

export default UserNav;
