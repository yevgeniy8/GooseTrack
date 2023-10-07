import styled from '@emotion/styled';

export const WeekdaysList = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 14px 0;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 227, 229, 0.8);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
`;

export const WeekdaysItem = styled.li`
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;
    /* &:nth-last-child(-n + 2) {
        color: #3e85f3;
    } */

    &:nth-last-of-type(-n + 2) {
        color: #3e85f3;
    }
`;
