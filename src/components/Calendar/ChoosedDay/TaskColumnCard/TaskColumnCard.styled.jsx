import styled from '@emotion/styled';

export const CardItem = styled.li`
  padding: 14px 14px 18px 14px;
  border-radius: 8px;

  word-wrap: break-word;

  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border: ${({ theme }) => theme.borders.calendar};
`;
export const CardContainer = styled.div`
  width: 100%;
`;

export const CardMain = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: flex-end;
`;
export const CardTitle = styled.h3`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;

  padding: 0px;
  margin-bottom: 30px;

  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 8px;
  height: 32px;
  width: 32px;

  border-radius: 50%;
  border: 1.8px solid #3e85f3;
`;

export const StatusHigh = styled.p`
  border-radius: 4px;

  text-align: center;
  font-size: 10px;
  line-height: 1.2;

  max-height: 20px;
  padding: 4px 12px;

  color: white;
  background-color: #ea3d65;
`;
export const StatusLow = styled.p`
  border-radius: 4px;
  font-size: 10px;
  line-height: 1.2;

  max-height: 20px;
  padding: 4px 12px;

  color: white;
  background-color: #72c2f8;
`;

export const StatusMedium = styled.p`
  border-radius: 4px;
  font-size: 10px;
  line-height: 1.2;

  max-height: 20px;
  padding: 4px 12px;

  color: white;
  background-color: #f3b249;
`;
