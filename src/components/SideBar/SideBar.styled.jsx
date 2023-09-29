import styled from '@emotion/styled';

export const Wrapper = styled.div`
    height: 100%;
    width: 289px;
    padding: 24px 24px 32px 24px;
    z-index: 10;
    position: fixed;
    justify-content: flex-start;
`;

export const LogoWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`;

export const LogoImg = styled.img`
    height: 35px;
    width: 36px;
    margin-right: 6px;

    @media (min-width: 768px) {
        height: 58px;
        width: 60px;
    }

    @media (min-width: 1440px) {
        height: 68px;
        width: 71px;
        margin-right: 10px;
    }
`;

export const CloseBtn = styled.button`
    display: flex;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    background: none;
    color: #000000;
    padding: 0px;

    @media (min-width: 768px) {
        width: 34px;
        height: 34px;
    }
    @media (min-width: 1440px) {
        display: none;
    }
`;

export const IconX = styled.svg`
    width: 24px;
    height: 24px;

    @media (min-width: 768px) {
        width: 34px;
        height: 34px;
    }
`;
