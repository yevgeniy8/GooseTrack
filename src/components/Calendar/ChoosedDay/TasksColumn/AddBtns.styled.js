import styled from '@emotion/styled';

export const PlusIcon = styled.svg`
  width: 50px;
  height: 100%;

  stroke: ${({ theme }) => theme.colors.textTitleHeader};

  // @media (min-width: 768px) {
  //   width: 34px;
  //   height: 34px;
  // }
`;
export const TopBtn = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 0px;
  border-radius: 50%;
  border: none;
  background: transparent;
  align-items: center;
  ${'' /* width: 100%; */}

  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.textTitleHeader};
  display: flex;

  ${
    '' /* border: none;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  // @media (min-width: 768px) {
  //   width: 34px;
  //   height: 34px;
  // } */
  }
`;
export const BtnToAdd = styled.button`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */

  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background: ${({ theme }) => theme.colors.backgroundSideBarCurrentPage};

  margin-top: 32px;
  margin-bottom: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 52px;
  width: 100%;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonAddTaskHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #3e85f3;
  }
`;
export const IconX = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  stroke: ${({ theme }) => theme.colors.textTitleHeader};

  // @media (min-width: 768px) {
  //   width: 34px;
  //   height: 34px;
  // }
`;
