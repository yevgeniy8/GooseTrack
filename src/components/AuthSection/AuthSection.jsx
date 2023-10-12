import React from 'react';

import {
    Image,
    AuthSectContainer,
    Title,
    SpanTitle,
    Content,
    WrapperImage,
    Nav,
    Register,
    Login,
} from './AuthSection.styled';

import goose_desktop_tablet_1x_welcome from '../../images/main_page/goose-desktop-tablet-1x-welcome.png';
import goose_desktop_tablet_1x_welcome_webp from '../../images/main_page/goose-desktop-tablet-1x-welcome.webp';
import goose_desktop_tablet_2x_welcome from '../../images/main_page/goose-desktop-tablet-2x-welcome.png';
import goose_desktop_tablet_2x_welcome_webp from '../../images/main_page/goose-desktop-tablet-2x-welcome.webp';
import goose_mobile_1x_welcome from '../../images/main_page/goose-mobile-1x-welcome.png';
import goose_mobile_1x_welcome_webp from '../../images/main_page/goose-mobile-1x-welcome.webp';
import goose_mobile_2x_welcome from '../../images/main_page/goose-mobile-2x-welcome.png';
import goose_mobile_2x_welcome_webp from '../../images/main_page/goose-mobile-2x-welcome.webp';

import sprite from '../../images/icons.svg';

const AuthSection = () => {
    return (
        <AuthSectContainer>
            <Content>
                <WrapperImage>
                    <picture>
                        <source
                            srcSet={
                                (goose_mobile_1x_welcome_webp,
                                goose_mobile_2x_welcome_webp)
                            }
                            media="(max-width: 767px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (goose_mobile_1x_welcome,
                                goose_mobile_2x_welcome)
                            }
                            media="(max-width: 767px)"
                            type="image/png"
                        />
                        <source
                            srcSet={
                                (goose_desktop_tablet_1x_welcome_webp,
                                goose_desktop_tablet_2x_welcome_webp)
                            }
                            media="(min-width: 768px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (goose_desktop_tablet_1x_welcome,
                                goose_desktop_tablet_2x_welcome)
                            }
                            media="(min-width: 768px)"
                            type="image/png"
                        />
                        <Image src={goose_mobile_1x_welcome} alt="goose" />
                    </picture>
                </WrapperImage>

                <Title>
                    G<SpanTitle>oo</SpanTitle>seTrack
                </Title>
                <Nav>
                    <Register to="/register">Sign up</Register>
                    <Login to="/login">
                        Log in
                        <svg width="18" height="18">
                            <use href={`${sprite}#log-in`} />
                        </svg>
                    </Login>
                </Nav>
            </Content>
        </AuthSectContainer>
    );
};

export default AuthSection;
