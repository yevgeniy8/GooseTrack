import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavWrap = styled.div`
    width: 100%;
    margin: 32px 24px 0 24px;
    background-color: 'red';
`;

export const NavTitle = styled.h3`
    font-size: 14px;
    line-height: 1.33;
    color: rgba(52, 52, 52, 0.5);
`;

export const Item = styled.li`
    border-radius: 8px;
    width: 100%;
    height: 50px;
`;
export const List = styled.ul`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Icon = styled.svg`
    width: 24px;
    height: 24px;
    stroke: rgba(52, 52, 52, 0.5);
    fill: none;
`;

export const IconStat = styled.svg`
    width: 24px;
    height: 24px;

    fill: rgba(52, 52, 52, 0.5);
`;

export const Link = styled(NavLink)`
    font-size: 16px;
    line-height: 1.21;

    width: 100%;
    height: 100%;
    display: block;
    padding: 16px 20px;
    border-radius: 8px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    color: rgba(52, 52, 52, 0.5);

    &:hover,
    &:focus {
        background-color: #e3f3ff;
    }

    &.active {
        background: #e3f3ff;
        color: #3e85f3;

        svg {
            stroke: rgba(52, 52, 52, 0.5);
            fill: rgba(52, 52, 52, 0.5);
        }

        &.active svg {
            stroke: #3e85f3;
            fill: #3e85f3;
        }
    }
`;
