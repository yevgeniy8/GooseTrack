import styled from '@emotion/styled';

export const BurgerMenuBtn = styled.button`
    padding: 8px 20px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 24px 20px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const TitleH2 = styled.h2`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text};
    border-right: ${({ theme }) => theme.borders.borderSideBar};
`;

export const AddFeedbackBtn = styled.button`
    padding: 8px 20px;
`;
