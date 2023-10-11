import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { tablet, min } from '../../../styles/media';

export const NavWrap = styled.div`
    width: 100%;
`;

export const NavTitle = styled.h3`
    color: ${({ theme }) => theme.colors.textTitleSideBar};
    font-family: Inter;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    line-height: normal;

    ${min(tablet)} {
        font-size: 14px;
    }
`;

export const Item = styled.li`
    border-radius: 8px;
    width: 100%;
    height: 56px;
`;
export const List = styled.ul`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Icon = styled.svg`
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.colors.iconSideBar};
    margin-right: 10px;

    ${min(tablet)} {
        width: 24px;
        height: 24px;
    }
`;

export const IconStat = styled.svg`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    fill: ${({ theme }) => theme.colors.iconSideBar};

    ${min(tablet)} {
        width: 24px;
        height: 24px;
    }
`;

export const Link = styled(NavLink)`
    color: ${({ theme }) => theme.colors.textSideBar};
    font-family: Inter;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    line-height: normal;

    display: block;
    padding: 16px 20px;
    border-radius: 8px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;

    ${min(tablet)} {
        font-size: ${({ theme }) => theme.fontSizes.m};
    }

    &:hover,
    &:focus {
        background-color: ${({ theme }) =>
            theme.colors.backgroundSideBarCurrentPage};
    }

    &.active {
        background: ${({ theme }) => theme.colors.backgroundSideBarCurrentPage};
        color: ${({ theme }) => theme.colors.textSideBarCurrentPage};

        svg {
            stroke: ${({ theme }) => theme.colors.iconSideBar};
            fill: ${({ theme }) => theme.colors.iconSideBar};
        }

        &.active svg {
            stroke: ${({ theme }) => theme.colors.iconSideBarActive};
            fill: ${({ theme }) => theme.colors.iconSideBarActive};
        }
    }
`;
