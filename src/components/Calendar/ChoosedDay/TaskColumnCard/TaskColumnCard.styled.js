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
export const CardEditMenu = styled.ul`
  padding: 0px;
  gap: 10px;
  margin-left: auto;
  margin-right: 14px;
  margin-top: auto;
  display: flex;
  list-style: none;
`;
export const CardEditBtn = styled.li`
  padding: 0px;
  gap: 10px;
  margin-left: auto;
  margin-right: 14px;
  margin-top: auto;
  display: flex;
  list-style: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: #3e85f3;
    color: #fff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px #3e85f3;
  }
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
export const StatusHigh = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBolt';
  font-size: 10px;
  line-height: 1.2;
  color: white;

  background-color: #f00;
`;
export const StatusLow = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBolt';
  font-size: 10px;
  line-height: 1.2;
  color: white;

  background-color: #0015ff;
`;

export const StatusMedium = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBolt';
  font-size: 10px;
  line-height: 1.2;
  color: white;

  background-color: #ff7700;
`;
