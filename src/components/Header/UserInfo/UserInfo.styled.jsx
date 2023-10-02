import styled from '@emotion/styled';

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        gap: 14px;
    }
`;

export const NameP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeight.b};
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.colors.textUserName};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: ${({ theme }) => theme.fontSizes.l};
        line-height: calc(18 / 18);
    }
`;

export const AvatarDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    background-color: transparent;
    border: ${({ theme }) => theme.borders.avatar};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 44px;
        height: 44px;
    }
`;

export const FirstLetterOfName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.b};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.userDefaults};
`;
