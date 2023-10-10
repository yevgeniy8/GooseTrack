import styled from '@emotion/styled';
import { desktop, tablet, min } from '../../styles/media';

export const Wrapper = styled.div`
    height: 100vh;
    width: 225px;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.backgroundSideBar};
    position: fixed;
    z-index: 10;

    ${min(tablet)} {
        width: 289px;
        padding: 24px 32px;
    }

    ${min(desktop)} {
        z-index: 1;
        border-right: none;
        transform: translateX(0);
        padding: 32px 24px 24px 24px;
    }
`;

export const LogoWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    margin-bottom: 32px;
`;

export const LogoImg = styled.img`
    height: 35px;
    width: 36px;
    margin-right: 6px;

    ${min(tablet)} {
        height: 58px;
        width: 60px;
    }

    ${min(desktop)} {
        height: 68px;
        width: 71px;
        margin-right: 10px;
    }
`;

export const LogoTitle = styled.p`
    color: ${({ theme }) => theme.colors.textTitleLogo};
    font-family: Inter;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.b};
    line-height: 1;
    letter-spacing: 0em;
    margin-right: 25px;

    ${min(tablet)} {
        margin-right: 31px;
    }
    ${min(desktop)} {
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
    padding: 0px;

    ${min(tablet)} {
        width: 34px;
        height: 34px;
    }
    ${min(desktop)} {
        display: none;
    }
`;

export const IconX = styled.svg`
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.textTitleHeader};

    ${min(tablet)} {
        width: 34px;
        height: 34px;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    margin-top: auto;
`;
