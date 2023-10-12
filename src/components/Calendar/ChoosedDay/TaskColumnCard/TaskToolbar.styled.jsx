import styled from '@emotion/styled';

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.iconTasks};
`;

export const CardEditMenu = styled.ul`
  display: flex;
  padding: 0px;
  gap: 10px;
`;
export const CardEditBtn = styled.button`
  padding: 0px;
  border: none;
  display: flex;
  background-color: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    svg {
      stroke: #3e85f3;
    }
  }

  &:focus {
    svg {
      stroke: #3e85f3;
    }
  }
`;
export const CtgPopUp = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;

  padding: 20px 24px;
  width: 140px;
  gap: 14px;
  left: 51%;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: ${({ theme }) => theme.borders.calendar};
`;

export const CtgPopBtn = styled.button`
  text-transform: capitalize;
  border: ${({ theme }) => theme.borders.calendar};
  background: none;
  border: none;
  width: 100%;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
`;
