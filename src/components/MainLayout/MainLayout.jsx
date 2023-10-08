import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import SideBar from 'components/SideBar';
import Spinner from 'components/Spinner/Spinner';
import { Wrapper, Section, Overlay } from './MainLayout.styled';

const MainLayout = () => {
    const [sideBareShow, setSideBareShow] = useState(window.innerWidth >= 1440);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const handleSideBareShow = () => {
        if (window.innerWidth >= 1440) {
            return;
        }
        setSideBareShow(!sideBareShow);
        setIsOverlayVisible(!sideBareShow);

        if (!sideBareShow) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
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
            {isOverlayVisible && <Overlay />}
            <SideBar isOpen={sideBareShow} onCloseClick={handleSideBareShow} />
            {sideBareShow && window.innerWidth >= 1440 && (
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
