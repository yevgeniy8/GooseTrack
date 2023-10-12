import styled from '@emotion/styled';

export const ColumnHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
`;
export const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PlusIcon = styled.svg`
  width: 100%;
  height: 100%;

  stroke: ${({ theme }) => theme.colors.textTitleHeader};

  // @media (min-width: 768px) {
  //   width: 34px;
  //   height: 34px;
  // }
`;
