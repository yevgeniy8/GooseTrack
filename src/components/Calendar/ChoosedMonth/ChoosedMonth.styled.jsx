import styled from '@emotion/styled';


export const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-radius: 8px;
    ${props => props.fullheight}
    ${props =>
        props.fullheight &&
        `grid-template-rows: repeat(${props.is28Days ? 4 : 5}, 1fr);`}
    div {
        display: flex;
        gap: 4px;
        justify-content: space-around;
        // justify-content: space-between;
        flex-direction: column;
        align-items: flex-end;
        padding: 4px;
        overflow: hidden;
        // max-width: 165px;
        height: 95px;
        background-color: white;
        border: 1px solid rgba(220, 227, 229, 0.8);
        
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
              max-width: 155px;
              height: 134px;
              padding: 8px;
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
            padding: 4px 8px;
            // margin: 8px 4px 0 0;
            // height: fit-content;
            color: #343434;
                @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
                //   margin: 14px 14px 0 0;
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
