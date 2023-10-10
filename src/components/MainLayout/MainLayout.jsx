import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import SideBar from 'components/SideBar';
import Spinner from 'components/Spinner/Spinner';
import {
    Wrapper,
    Section,
    ContainerSideBar,
    Overlay,
} from './MainLayout.styled';

const MainLayout = () => {
    const [sideBareShow, setSideBareShow] = useState(false);

    const toggleSideBarShow = (status = null) => {
        if (status === null) {
            setSideBareShow(prev => !prev);
        } else {
            setSideBareShow(status);
        }
    };

    useEffect(() => {
        const body = document.body;
        if (sideBareShow && window.innerWidth < 1440) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }

        return () => {
            body.style.overflow = '';
        };
    }, [sideBareShow]);

    return (
        <Wrapper sideBareShow={sideBareShow}>
            {sideBareShow && window.innerWidth < 1440 && <Overlay />}
            <ContainerSideBar sideBareShow={sideBareShow}>
                <SideBar toggleSideBarShow={toggleSideBarShow} />
            </ContainerSideBar>

            <Section>
                <Header onOpenClick={toggleSideBarShow} />
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
