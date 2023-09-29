import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';
import {
    Wrapper,
    LogoWrapper,
    LogoImg,
    CloseBtn,
    IconX,
} from './SideBar.styled';
import LogoRetina from '../../images/logo/logo-GOOSE-desk-2x.png';
import Logo from '../../images/logo/logo-GOOSE-desk-1x.png';
import Icons from '../../images/icons.svg';

const SideBar = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <picture>
                    <source
                        srcSet={LogoRetina}
                        media="(min-resolution: 2dppx)"
                    />
                    <LogoImg src={Logo} alt="logo" />
                </picture>
                <p>
                    G<span style={{ fontStyle: 'italic' }}>oo</span>seTrack
                </p>
                <CloseBtn>
                    <IconX stroke="black">
                        <use href={`${Icons}#x-close`} />
                    </IconX>
                </CloseBtn>
            </LogoWrapper>
            <UserNav></UserNav>
            <LogoutBtn></LogoutBtn>
        </Wrapper>
    );
};

export default SideBar;
