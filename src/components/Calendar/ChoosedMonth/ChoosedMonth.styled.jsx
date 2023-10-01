import styled from '@emotion/styled';

// export const WeekdaysBox = styled.div`
// background-color: rgba(255, 255, 255, 1);
// border: solid 1px rgba(220, 227, 229, 0.8);
// border-radius: 8px;
// `

export const WeekdaysList = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 14px 0;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 227, 229, 0.8);
    border-radius: 8px;
    overflow: hidden;
    `;

export const WeekdaysItem = styled.li`
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;
    &:nth-last-child(-n+2) {
        color: #3E85F3;
    };
`



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


