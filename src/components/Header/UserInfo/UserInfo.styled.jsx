import styled from '@emotion/styled';

import { tablet, min } from 'styles/media';

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    ${min(tablet)} {
        gap: 14px;
    }
`;

export const NameP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeight.b};
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.colors.textUserName};

    ${min(tablet)} {
        font-size: ${({ theme }) => theme.fontSizes.l};
        line-height: calc(18 / 18);
    }
`;

export const AvatarDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    background-color: transparent;
    border: ${({ theme }) => theme.borders.avatar};

    ${min(tablet)} {
        width: 44px;
        height: 44px;
    }
`;
export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
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

export const BirthdayDiv = styled.div`
    position: absolute;
    top: -28%;
    left: 30px;
    transform: translate(-50%, -50%) rotate(40deg);
    width: 100%;
    height: auto;

    ${min(tablet)} {
        top: -15%;
        left: 45px;
    }
`;
