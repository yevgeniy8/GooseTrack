import styled from '@emotion/styled';

export const ColumnList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #e7e5e5;
  }
`;
