import styled from '@emotion/styled';

export const TaskList = styled.ul`
  gap: 17px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  overflow-y: auto;
  max-height: 380px;
  padding-right: 7px;

  &::-webkit-scrollbar {
    width: 8px;
    padding: 50px;
  }

  &::-webkit-scrollbar-thumb {
    padding: 50px;
    border-radius: 12px;
    background: #e7e5e5;
  }
`;
export const ColumnList = styled.ul`
  display: flex;
  gap: 27px;
`;
export const ColumnItem = styled.li`
  flex-basis: calc((100% - 2 * 27px) / 3);
  background: snow;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;
  min-width: 135px;
`;
export const BtnToAdd = styled.button`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
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
