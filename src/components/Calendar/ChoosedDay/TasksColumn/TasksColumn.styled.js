import styled from '@emotion/styled';

export const TaskList = styled.ul`
  gap: 18px;
  display: flex;
  flex-direction: column;
  padding: 0px;
`;
export const Column = styled.li`
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  min-width: 329px;
  padding-left: 14px;
  padding-right: 8px;
`;
export const Container = styled.div`
  ${'' /* margin-bottom: 35px; */}
`;
// export const ColumnHeader = styled.div`
//   list-style: none;
// `;
