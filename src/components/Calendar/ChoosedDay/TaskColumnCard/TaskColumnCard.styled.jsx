import styled from '@emotion/styled';

export const CardItem = styled.li`
    width: 300px;
    height: 112px;
    padding: 14px 14px 18px 14px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: 8px;
    border: ${({ theme }) => theme.borders.calendar};
`;
export const CardContainer = styled.div`
    // background: red;
    width: 100%;
`;

export const CardMain = styled.div`
    display: flex;
    // background: pink;
`;
export const CardTitle = styled.h3`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    // background: orange;
    padding: 0px;
    margin-bottom: 30px;
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
    // background-color: #3e85f3;
    color: blue;
`;

export const AvatarWrapper = styled.div`
    height: 32px;
    width: 32px;
    padding: 6px;
    border-radius: 50%;
    border: 1.8px solid #3e85f3;
`;

export const AvatarStyle = styled.img`
    width: 16px;
    height: 16px;
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
