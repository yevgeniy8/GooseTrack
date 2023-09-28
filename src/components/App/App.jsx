import SideBar from 'components/SideBar';

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
            <SideBar></SideBar>
        </div>
    );
};
