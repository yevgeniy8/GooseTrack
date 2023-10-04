import styled from '@emotion/styled';

// export const WeekdaysBox = styled.div`
// background-color: rgba(255, 255, 255, 1);
// border: solid 1px rgba(220, 227, 229, 0.8);
// border-radius: 8px;
// `

// export const CalendarContainer = styled.div`
// position: absolute`

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
    ${props => props.fullheight && `height: calc(100% - 75px);`}
    ${props =>
        props.fullheight &&
        `grid-template-rows: repeat(${props.is28Days ? 4 : 5}, 1fr);`}
    div {
        display: grid;
        max-width: 155px;
        height: 125px;
        background-color: white;
        border: 1px solid rgba(220, 227, 229, 0.8);
        span {
            font-family: Inter;
            font-size: 16px;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
            text-align: right;
            padding: 14px 14px;
            // height: fit-content;
            color: #343434;
        }

        span.active {
            background-color: #e3f3ff;
        }
        span.active::before {
            color: #3e85f3;
            content: 'Today   ';
            font-size: 16px;
        }
    }
`;

// .item {
//     width: calc((100% - 10 * 5px) / 5);
//     margin: 5px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     gap: 8px;
//     padding: 5px;
//     text-align: center;
// }

// .list {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 15px;
//     margin: -5px;
//     transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }
