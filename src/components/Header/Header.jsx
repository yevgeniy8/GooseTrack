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
    MotivationContent,
    TextDiv,
    TitleH2,
    TextP,
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
    const userTasks = [{ category: 'in-Progress' }, { category: 'to-Do' }];
    // const userTasks = [{}];

    function formatPageTitle(location) {
        const formatted = location.replace(/\//g, '');
        return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }
    const pageTitle = formatPageTitle(location);

    const hasUncompletedTask = userTasks.some(
        i => i.category === 'in-Progress' || i.category === 'to-Do'
    );

    return (
        <header>
            <HeaderContainer>
                <BurgerMenuBtn onClick={onOpenClick}>
                    <Svg>
                        <use href={`${sprite}#menu-01`} />
                    </Svg>
                </BurgerMenuBtn>
                <MotivationContent>
                    {hasUncompletedTask && (
                        <img
                            srcSet={`${image1x} 1x, ${image2x} 2x`}
                            src={image1x}
                            alt="Goose's motivation"
                            width="64px"
                            height="60px"
                        />
                    )}

                    <TextDiv>
                        <TitleH2>{pageTitle}</TitleH2>
                        {hasUncompletedTask && (
                            <TextP>
                                <Span>Let go</Span> of the past and focus on the
                                present!
                            </TextP>
                        )}
                    </TextDiv>
                </MotivationContent>
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
