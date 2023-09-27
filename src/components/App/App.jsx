import LogoutBtn from 'components/SideBar/LogoutBtn/LogoutBtn';

export const App = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
            }}
        >
            React homework template
            <LogoutBtn></LogoutBtn>
        </div>
    );
};
