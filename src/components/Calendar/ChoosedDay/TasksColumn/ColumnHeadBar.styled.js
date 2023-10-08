import styled from '@emotion/styled';

export const ColumnHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${'' /* text-align: center; */}
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2; /* 120% */
`;
export const ColumnContainer = styled.div`
  display: flex;
  margin-top: 27px;
  margin-bottom: 47px;
`;
export const PlusIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: auto;
  stroke: ${({ theme }) => theme.colors.textTitleHeader};

  // @media (min-width: 768px) {
  //   width: 34px;
  //   height: 34px;
  // }
`;
