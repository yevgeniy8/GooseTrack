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

const UserNav = ({ onLinkClick }) => {
    return (
        <NavWrap>
            <NavTitle>User Panel</NavTitle>
            <List>
                <Item>
                    <Link to="account" onClick={onLinkClick}>
                        <Icon>
                            <use href={`${Icons}#user-check`} />
                        </Icon>
                        <span>My account</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="calendar" onClick={onLinkClick}>
                        <Icon>
                            <use href={`${Icons}#calendar-check`} />
                        </Icon>
                        <span>Calendar</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="statistics" onClick={onLinkClick}>
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
