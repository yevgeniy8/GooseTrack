import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import SideBar from 'components/SideBar';
import { Wrapper } from './MainLayout.styled';

const MainLayout = () => {
    return (
        <Wrapper>
            <SideBar></SideBar>
            <Header></Header>
            <main>
                <Suspense>
                    {/* <Suspense fallback={<LinearProgress />}> */}
                    <Outlet />
                </Suspense>
            </main>
        </Wrapper>
    );
};

export default MainLayout;
