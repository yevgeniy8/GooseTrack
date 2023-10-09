import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ToolbarContainer = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const PeriodTypeSelect = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  gap: 8px;
`;

export const DateBox = styled.div`
  background-color: #3e85f3;
  width: 148px;
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Date = styled.span`
  text-transform: uppercase;
  color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;

export const ToggleBox = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  gap: 1px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ToggleBtn = styled.div`
  padding: 7px 10px;
  background-color: #fff;
`;

export const Icon = styled.svg`
  stroke: #dce3e5;
  &:hover {
    stroke: #343434;
  }
`;

export const BtnLeft = styled.button`
  padding: 8px 10px;
  width: 38px;
  height: 34px;
  background-color: #fff;
  border: solid 1px rgba(220, 227, 229, 0.8);
  border-radius: 8px 0 0 8px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    stroke: #343434;
  }
`;

export const BtnRight = styled.button`
  padding: 8px 10px;
  width: 38px;
  height: 34px;
  background-color: #fff;
  border: solid 1px rgba(220, 227, 229, 0.8);
  border-radius: 0 8px 8px 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    stroke: #343434;
  }
`;

export const PeriodPaginator = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  height: 34px;
`;

export const Period = styled.div`
  width: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  background-color: rgba(62, 133, 243, 0.2);
`;

export const BtnMonth = styled.button`
  width: 82px;
  height: 34px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px 0 0 8px;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  background-color: #e3f3ff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #3e85f3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &.active {
    background-color: rgba(62, 133, 243, 0.2);
  }
`;

export const BtnDay = styled.button`
  width: 82px;
  height: 34px;
  padding: 8px 16px;
  border: none;
  border-radius: 0 8px 8px 0;
  border-left: 1px solid rgba(62, 133, 243, 0.2);
  background-color: #e3f3ff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #3e85f3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &.active {
    background-color: rgba(62, 133, 243, 0.2);
  }
`;

export const TypeLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: #3e85f3;
`;
