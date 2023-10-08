import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import SideBar from 'components/SideBar';
import Spinner from 'components/Spinner/Spinner';
import { Wrapper, Section } from './MainLayout.styled';

const MainLayout = () => {
    const [sideBareShow, setSideBareShow] = useState(window.innerWidth >= 1440);

    const handleSideBareShow = () => {
        if (window.innerWidth >= 1440) {
            return;
        }
        setSideBareShow(!sideBareShow);
    };

    useEffect(() => {
        const handleResize = () => {
            setSideBareShow(window.innerWidth >= 1440);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Wrapper>
            <SideBar isOpen={sideBareShow} onCloseClick={handleSideBareShow} />
            {sideBareShow && (
                <div id="smallScreenContainer" style={{ width: 289 }} />
            )}

            <Section>
                <Header
                    isOpen={sideBareShow}
                    onOpenClick={handleSideBareShow}
                />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Outlet />
                    </Suspense>
                </main>
            </Section>
        </Wrapper>
    );
};

export default MainLayout;
