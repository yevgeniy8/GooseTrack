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

export const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    ${props => props.fullheight}
    ${props =>
        props.fullheight &&
        `grid-template-rows: repeat(${props.is28Days ? 4 : 5}, 1fr);`}
    div {
        display: grid;
        justify-content: end;
        // max-width: 155px;
        height: 95px;
        background-color: white;
        border: 1px solid rgba(220, 227, 229, 0.8);
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
              max-width: 155px;
              height: 125px;
            };
        span {
            font-family: Inter;
            font-size: 12px;
            font-weight: 700;
            line-height: 14px;
            letter-spacing: 0em;
            text-align: center;
            width: 22px;
            height: 22px;
            border-radius: 8px;
            padding: 4px;
            margin: 8px 4px 0 0;
            // height: fit-content;
            color: #343434;
                @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
                  margin: 14px 14px 0 0;
                  font-size: 16px;
                  font-weight: 700;
                  line-height: 18px;
                  width: 26px;
                  height: 26px;
    };
        }

        span.active {
            color: #FFF;
            background-color: #3E85F3;
        }
        // span.active::before {
        //     color: #3e85f3;
        //     content: 'Today   ';
        //     font-size: 16px;
        // }
    }
`;
