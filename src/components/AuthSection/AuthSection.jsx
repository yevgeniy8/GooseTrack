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
    Svg,
} from './AuthSection.styled';

import goose_desktop_tablet_1x_welcome from '../../images/main_page/goose-desktop-tablet-1x-welcome.png';
import goose_desktop_tablet_2x_welcome from '../../images/main_page/goose-desktop-tablet-2x-welcome.png';
import goose_mobile_1x_welcome from '../../images/main_page/goose-mobile-1x-welcome.png';
import goose_mobile_2x_welcome from '../../images/main_page/goose-mobile-2x-welcome.png';

import sprite from '../../images/icons.svg';

const AuthSection = () => {
    return (
        <AuthSectContainer>
            <Content>
                <WrapperImage>
                    <picture>
                        <source
                            srcSet={
                                (goose_desktop_tablet_1x_welcome,
                                goose_desktop_tablet_2x_welcome)
                            }
                            media="(min-width: 1440px)"
                        />
                        <source
                            srcSet={
                                (goose_desktop_tablet_1x_welcome,
                                goose_desktop_tablet_2x_welcome)
                            }
                            media="(min-width: 768px)"
                        />
                        <Image
                            srcSet={
                                (goose_mobile_1x_welcome,
                                goose_mobile_2x_welcome)
                            }
                            alt=""
                        />
                    </picture>
                </WrapperImage>

                {/* <img src={loginSvg} alt="" width={18} /> */}
                <Title>
                    G<SpanTitle>oo</SpanTitle>seTrack
                </Title>
                <Nav>
                    <Register to="/register">Sign up</Register>
                    <Login to="/login">
                        Log in
                        <Svg width="18" height="18">
                            <use href={`${sprite}#log-in`} />
                        </Svg>
                    </Login>
                </Nav>
            </Content>
        </AuthSectContainer>
    );
};

export default AuthSection;
