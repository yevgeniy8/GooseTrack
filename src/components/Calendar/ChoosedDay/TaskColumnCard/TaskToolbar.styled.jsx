import styled from '@emotion/styled';
// import styled from '@emotion/styled/macro';
// import styled from 'styled-components';

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
  display: flex;
  position: relative;

  border: none;
  padding: 0px;

  background-color: inherit;
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

  padding: 16px 24px;
  width: 140px;
  gap: 14px;
  left: -60px;
  top: 20px;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: ${({ theme }) => theme.borders.calendar};
`;

export const CtgPopBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  text-transform: capitalize;

  width: 100%;
  padding: 0px;

  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
