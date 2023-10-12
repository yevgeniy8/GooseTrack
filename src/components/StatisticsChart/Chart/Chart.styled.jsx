import styled from '@emotion/styled';

export const CharContainer = styled.div`
    border: 0.8px solid;
    border-color: ${({ theme }) => theme.colors.statisticsLine};
    width: 307px;
    height: 413px;
    border-radius: 29px;
    padding: 73px 14px 66px 14px;
    color: #343434;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 640px;
        height: 424px;
        border-radius: 16px;
        padding: 61px 32px 32px 32px;
        color: #343434;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        width: 860px;
        height: 440px;
        border-radius: 29px;
        padding: 85px 40px 70px 40px;
        color: #343434;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }
`;

export const StatBlock = styled.section`
    display: flex;
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 8px;
    }
`;

export const Yaxis = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -37px;
    margin-right: 0px;
    padding-left: 0px;
    font-weight: 600;
    @media screen and (min-width: 768px) {
        margin-top: -41px;
        margin-right: 17px;
    }
    @media screen and (min-width: 1440px) {
        margin-right: 46px;
        margin-top: -40px;
    }
`;
export const YaxisName = styled.p`
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 24px;
    }
`;
export const Yticks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 29px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary};
    @media screen and (min-width: 768px) {
        gap: 33px;
    }
    @media screen and (min-width: 1440px) {
        gap: 33px;
    }
`;

export const Xaxis = styled.div``;

export const Xticks = styled.ul`
    display: flex;
    gap: 34px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-left: 62px;
    margin-bottom: -33px;
    font-size: 12px;
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 120px;
        margin-left: 122px;
        margin-bottom: -33px;
        font-size: 14px;
    }
    @media screen and (min-width: 1440px) {
        display: flex;
        gap: 176px;
        margin-left: 180px;
        margin-bottom: -33px;
        font-size: 14px;
    }
`;
