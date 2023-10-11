import styled from '@emotion/styled';

export const TaskList = styled.ul`
  gap: 17px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  overflow-y: auto;
  height: 380px;
  padding-right: 7px;
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
    padding: 50px;
  }

  &::-webkit-scrollbar-thumb {
    padding: 50px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.scrollbar};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.backgroundScrollbar};
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
