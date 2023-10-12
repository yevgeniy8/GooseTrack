import styled from '@emotion/styled';
import { tablet, min, desktop } from 'styles/media';

export const List = styled.ul`
    list-style: none;
    height: 65px;
    max-width: 44px;
    padding: 0 2px 0 8px;
    overflow: hidden;
    ${min(tablet)} {
        max-width: 100%;
        padding: 0 4px;
    }
`;

export const Task = styled.li`
    padding: 2px 4px;
    border-radius: 8px;
    margin-bottom: 8px;
    width: 44px;
    height: 22px;
    max-width: 100%;
    color: ${({ theme, priority }) =>
        priority === 'low'
            ? theme.colors.colorLow
            : priority === 'medium'
            ? theme.colors.colorMedium
            : priority === 'high'
            ? theme.colors.colorHigh
            : theme.colors.colorLow};
    background-color: ${({ theme, priority }) =>
        priority === 'low'
            ? theme.colors.bgColorLow
            : priority === 'medium'
            ? theme.colors.bgColorMedium
            : priority === 'high'
            ? theme.colors.bgColorHigh
            : theme.colors.bgColorLow};
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, color ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    &:hover,
    :active {
        color: ${({ theme, priority }) =>
            priority === 'low'
                ? theme.colors.bgColorLow
                : priority === 'medium'
                ? theme.colors.bgColorMedium
                : priority === 'high'
                ? theme.colors.bgColorHigh
                : theme.colors.bgColorLow};
        background-color: ${({ theme, priority }) =>
            priority === 'low'
                ? theme.colors.colorLow
                : priority === 'medium'
                ? theme.colors.colorMedium
                : priority === 'high'
                ? theme.colors.colorHigh
                : theme.colors.colorLow};
    }

    ${min(tablet)} {
        width: 92px;
        height: 26px;
        font-size: 14px;
        line-height: 18px;
        padding: 4px 10px;
    }

    ${min(desktop)} {
        width: 140px;
        height: 26px;
    }
`;
