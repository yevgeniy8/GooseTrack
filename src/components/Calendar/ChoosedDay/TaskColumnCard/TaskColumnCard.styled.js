import styled from '@emotion/styled';

export const CardItem = styled.li`
    padding: 15px;
    background: #f7f6f9;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.8);
`;
export const CardContainer = styled.div`
    background: red;
    width: 100%;
`;

export const CardMain = styled.div`
    display: flex;
    background: pink;
`;
export const CardTitle = styled.h3`
    color: #111;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    background: orange;
    padding: 0px;
    margin: 14px 0px 30px 0px;
`;
export const CardStatus = styled.p`
    border-radius: 4px;
    background: #ea3d65;
    padding: 4px 12px;
    margin-bottom: 0px;
    color: #f7f6f9;
    text-align: center;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 12px;
`;

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 8px;
    ${
        '' /* width: 32px;
  height: 32px; */
    }
    background-color: #3e85f3;
    color: blue;
`;
// export const Container = styled.div`
//   display: flex;
//   align-items: flex-end;
//   gap: 8px;
//   ${
//     '' /* width: 32px;
//   height: 32px; */
//   }
//   background-color: #3e85f3;
//   color: yellow;
//   border-radius: 50%;
// `;
