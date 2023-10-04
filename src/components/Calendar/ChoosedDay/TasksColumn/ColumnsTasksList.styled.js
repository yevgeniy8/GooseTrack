import styled from '@emotion/styled';

export const TaskList = styled.ul`
  list-style: none;
  gap: 17px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  overflow-y: auto;
  max-height: 380px;
  padding: 0 7px; /**ДЛЯ СКРОЛЛУ */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    margin: 50px;
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
  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background: #e3f3ff;

  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 52px;
  width: 100%;

  left: 20px;
  bottom: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background: #cbe6ff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #3e85f3;
  }
`;
export const IconX = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.textTitleHeader};

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;