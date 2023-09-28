import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';

const SideBar = () => {
    return (
        <div>
            <div>
                <image></image>
                <p>
                    G<span style={{ fontStyle: 'italic' }}>oo</span>seTrack
                </p>
                <button></button>
            </div>
            <UserNav></UserNav>
            <LogoutBtn></LogoutBtn>
        </div>
    );
};

export default SideBar;
