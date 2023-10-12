import styled from '@emotion/styled';
export const LegendBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 0px;
    margin: 0px 0px 40px 0px;
    width: 307px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 32px;
        padding-right: 32px;
        margin-bottom: 40px;
        width: 640px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 40px;
        padding-right: 40px;
        margin-bottom: 40px;

        width: 860px;
    }
`;

export const Legend = styled.ul`
    display: flex;
    flex-direction: row;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    gap: 20px;
    font-size: 14px;
    li:first-of-type::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #ffd2dd;
        border-radius: 50%;
        margin-right: 8px;
    }
    li:last-of-type::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #3e85f3;
        border-radius: 50%;
        margin-right: 8px;
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 16px;
    }
`;

export const CalendarBlock = styled.div`
    /* display: flex; */
    /* gap: 50px; */
`;
