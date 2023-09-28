import { NavWrap, NavTitle, Link, Item, List } from './UserNav.styled';

const UserNav = () => {
    return (
        <NavWrap>
            <NavTitle>User Panel</NavTitle>
            <List>
                <Item>
                    <Link to="/account">
                        <icon></icon>
                        <span>My account</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="/calendar">
                        <icon></icon>
                        <span>Calendar</span>
                    </Link>
                </Item>
                <Item>
                    <Link to="/statistics">
                        <icon></icon>
                        <span>Statistics</span>
                    </Link>
                </Item>
            </List>
        </NavWrap>
    );
};

export default UserNav;
