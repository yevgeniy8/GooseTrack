import styled from '@emotion/styled';
import { tablet, mobile, desktop, min } from '../../../../styles/media';

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 17px;

  max-height: 255px;
  padding-right: 7px;
  margin-top: 24px;

  margin-bottom: 22px;
  /* overflow: hidden auto; */
  overflow-y: auto;
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
    max-height: 255px;
  }
  ${min(tablet)} {
    max-height: 324px;
  }

  ${min(desktop)} {
    max-height: 378px;
  }
`;

export const ColumnList = styled.ul`
  display: flex;
  gap: 27px;
`;

export const ColumnItem = styled.li`
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  padding: 20px;
  background: #fff;
`;
