import styled from '@emotion/styled';
import { tablet, min } from '../../../../styles/media';

export const TaskList = styled.ul`
  gap: 18px;
  display: flex;
  flex-direction: column;
  padding: 0px;
`;
export const Column = styled.li`
  border-radius: 8px;
  border: ${({ theme }) => theme.borders.calendar};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-bottom: 100%;
  min-width: 335px;
  padding-left: 14px;
  padding-right: 8px;

  ${min(tablet)} {
    min-width: 344px;
  }
`;
export const Container = styled.div`
  ${'' /* margin-bottom: 35px; */}
`;
// export const ColumnHeader = styled.div`
//   list-style: none;
// `;
