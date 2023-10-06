import styled from '@emotion/styled';

export const CardItem = styled.li`
  ${
    '' /* width: 300px;
  height: 112px; */
  }
  padding: 14px 14px 18px 14px;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 8px;
  border: ${({ theme }) => theme.borders.calendar};
`;
export const CardContainer = styled.div`
  width: 100%;
`;

export const CardMain = styled.div`
  display: flex;
`;
export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding: 0px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
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
export const StatusHigh = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;
  text-align: center;
  font-size: 10px;
  line-height: 1.2;
  color: white;

  background-color: #f00;
`;
export const StatusLow = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;
  font-size: 10px;
  line-height: 1.2;
  color: white;

  background-color: #0015ff;
`;

export const StatusMedium = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;
  font-size: 10px;
  line-height: 1.2;
  color: white;

  background-color: #ff7700;
`;
