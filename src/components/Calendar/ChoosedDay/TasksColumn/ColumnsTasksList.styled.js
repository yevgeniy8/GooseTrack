import styled from '@emotion/styled';
import { tablet, mobile, desktop, min } from '../../../../styles/media';
export const TaskList = styled.ul`
  gap: 17px;
  display: flex;
  flex-direction: column;
  padding: 0px;

  overflow: auto hidden;
  overflow-y: auto;
  padding-right: 7px;
  position: relative;
  margin-top: 24px;
  height: 300px;

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
  ${min(mobile)} {
    ${'' /* max-height: 432px; */}
    height: 260px;
  }
  ${min(tablet)} {
    height: 379;
  }

  ${min(desktop)} {
    height: 380px;
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
    min-width: 135px;|
    
`;
