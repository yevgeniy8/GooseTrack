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
export const TopAddBTN = styled.button`
  display: flex;
  padding: 0px;
  border-radius: 50%;
  border: none;
  background: transparent;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.textTitleHeader};
  display: flex;

  border: none;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  // @media (min-width: 768px) {
  //   width: 34px;
  //   height: 34px;
  // }
`;
