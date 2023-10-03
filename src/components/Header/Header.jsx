import React, { useState } from 'react';
import ThemeToggler from './ThemeToggler';
import UserInfo from './UserInfo';
import AddFeedbackBtn from './AddFeedbackBtn';
import { AddFeedbackModal } from './AddFeedbackModal/AddFeedbackModal';
import sprite from 'images/icons.svg';

import image1x from '../../images/calendar-page/goose_desktop_tablet_1x_motivation.png';
import image2x from '../../images/calendar-page/goose_desktop_tablet_2x_motivation.png';

import {
    HeaderContainer,
    BurgerMenuBtn,
    Svg,
    ImgWrapper,
    TextDiv,
    TitleH2,
    MotivationTextP,
    Span,
    UIComponentsWrapperDiv,
    MenuWrapperDiv,
} from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header = ({ onOpenClick }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const showAddFeedbackModal = () => {
        setIsOpenModal(true);
    };

    const hiddenAddFeedbackModal = () => {
        setIsOpenModal(false);
    };

    const location = useLocation().pathname;
    // для перевірки userTasks тимчасово
    const userTasks = [{ category: 'in-progress' }, { category: 'to-do' }];
    // const userTasks = [{}];

    const pageTitle = location.includes('/calendar')
        ? 'Calendar'
        : location.includes('/account')
        ? 'User Profile'
        : location.includes('/statistics')
        ? 'Statistics'
        : '';

    const hasUncompletedTask = userTasks.some(
        i => i.category === 'in-progress' || i.category === 'to-do'
    );
    const locationPageCalendar = pageTitle === 'Calendar';

    return (
        <header>
            <HeaderContainer>
                <BurgerMenuBtn onClick={onOpenClick}>
                    <Svg>
                        <use href={`${sprite}#menu-01`} />
                    </Svg>
                </BurgerMenuBtn>
                {hasUncompletedTask && locationPageCalendar && (
                    <ImgWrapper>
                        <img
                            srcSet={`${image1x} 1x, ${image2x} 2x`}
                            src={image1x}
                            alt="Goose's motivation"
                            width="64px"
                            height="60px"
                        />
                    </ImgWrapper>
                )}

                <TextDiv>
                    <TitleH2>{pageTitle}</TitleH2>
                    {hasUncompletedTask && locationPageCalendar && (
                        <MotivationTextP>
                            <Span>Let go</Span> of the past and focus on the
                            present!
                        </MotivationTextP>
                    )}
                </TextDiv>
                <UIComponentsWrapperDiv>
                    <MenuWrapperDiv>
                        <AddFeedbackBtn showModal={showAddFeedbackModal} />

                        <ThemeToggler />
                    </MenuWrapperDiv>

                    <UserInfo />
                </UIComponentsWrapperDiv>
            </HeaderContainer>
            {isOpenModal && (
                <AddFeedbackModal
                    isOpenModal={isOpenModal}
                    onClose={hiddenAddFeedbackModal}
                ></AddFeedbackModal>
            )}
        </header>
    );
};
