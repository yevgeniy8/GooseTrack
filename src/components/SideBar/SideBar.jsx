import { useEffect, useRef } from 'react';

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

const SideBar = ({ onClick, toggleSideBarShow }) => {
  const sideBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        toggleSideBarShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleSideBarShow]);

  return (
    <Wrapper ref={sideBarRef}>
      <div>
        <LogoWrapper>
          <picture>
            <source srcSet={LogoRetina} media="(min-resolution: 2dppx)" />
            <LogoImg src={Logo} alt="logo" />
          </picture>
          <LogoTitle>
            G<SpanTitle>oo</SpanTitle>
            seTrack
          </LogoTitle>
          <CloseBtn
            aria-label="close-mobile-menu"
            type="button"
            onClick={() => toggleSideBarShow(false)}
          >
            <IconX stroke="black">
              <use href={`${Icons}#x-close`} />
            </IconX>
          </CloseBtn>
        </LogoWrapper>
        <UserNav onLinkClick={() => toggleSideBarShow(false)} />
      </div>
      <BtnContainer>
        <LogoutBtn />
      </BtnContainer>
    </Wrapper>
  );
};

export default SideBar;
