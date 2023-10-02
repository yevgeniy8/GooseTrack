import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';
import {
    Wrapper,
    LogoWrapper,
    LogoImg,
    CloseBtn,
    IconX,
    LogoTitle,
    SpanTitle,
    BtnContainer,
} from './SideBar.styled';
import LogoRetina from '../../images/logo/logo-GOOSE-desk-2x.png';
import Logo from '../../images/logo/logo-GOOSE-desk-1x.png';
import Icons from '../../images/icons.svg';

const SideBar = () => {
    return (
        <Wrapper>
            <div>
                <LogoWrapper>
                    <picture>
                        <source
                            srcSet={LogoRetina}
                            media="(min-resolution: 2dppx)"
                        />
                        <LogoImg src={Logo} alt="logo" />
                    </picture>
                    <LogoTitle>
                        G<SpanTitle>oo</SpanTitle>
                        seTrack
                    </LogoTitle>
                    <CloseBtn type="button">
                        <IconX stroke="black">
                            <use href={`${Icons}#x-close`} />
                        </IconX>
                    </CloseBtn>
                </LogoWrapper>
                <UserNav />
            </div>
            <BtnContainer>
                <LogoutBtn />
            </BtnContainer>
        </Wrapper>
    );
};

export default SideBar;
