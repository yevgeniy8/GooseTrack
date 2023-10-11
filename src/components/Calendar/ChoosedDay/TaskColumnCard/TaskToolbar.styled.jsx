import styled from '@emotion/styled';

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.iconTasks};
`;

export const CardEditMenu = styled.ul`
  padding: 0px;
  gap: 10px;

  display: flex;
  list-style: none;
`;
export const CardEditBtn = styled.button`
  padding: 0px;
  border: none;
  border-radius: 2px;
  display: flex;
  background-color: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    /* outline: none;
        border: none; */
    svg {
      stroke: #3e85f3;
    }
  }

  &:focus {
    /* outline: none; */
    /* border: none; */
    /* box-shadow: 0 0 2px 2px #3e85f3; */
  }
`;
export const CtgPopUp = styled.div`
  width: 140px;
  gap: 14px;
  align-items: center;
  padding: 20px 24px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  left: 51%;
  border-radius: 8px;
  border: ${({ theme }) => theme.borders.calendar};
  ${'' /* z-index: 9999; */}
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
