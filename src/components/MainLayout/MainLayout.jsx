import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import SideBar from 'components/SideBar';

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <SideBar></SideBar>
            <main>
                <Suspense>
                    {/* <Suspense fallback={<LinearProgress />}> */}
                    <Outlet />
                    
                </Suspense>
            </main>
            </>
    );
};

export default MainLayout;
