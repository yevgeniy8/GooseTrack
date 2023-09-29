import styled from '@emotion/styled';

export const Wrapper = styled.div`
    height: 100vh;
    width: 225px;
    padding: 32px 24px 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.backgroundSideBar};

    @media (min-width: 768px) {
        width: 289px;
    }
`;

export const LogoWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
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

export const LogoTitle = styled.p`
    color: ${({ theme }) => theme.colors.textTitleLogo};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0em;

    @media (min-width: 1440px) {
        font-size: 24px;
    }
`;

export const SpanTitle = styled.span`
    font-style: italic;
    padding-right: 2px;
    margin-left: -2px;
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

export const BtnContainer = styled.div`
    display: flex;
    margin-top: auto;
`;
