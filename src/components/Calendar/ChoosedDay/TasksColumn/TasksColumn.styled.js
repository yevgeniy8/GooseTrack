import styled from '@emotion/styled';
import { tablet, min } from '../../../../styles/media';

export const TaskList = styled.ul`
    gap: 18px;
    display: flex;
    flex-direction: column;
    padding: 0px;
`;
export const Column = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: ${({ theme }) => theme.borders.calendar};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    min-width: 335px;

    padding: 18px 18px 18px 14px;
    padding-right: 18px;

    ${min(tablet)} {
        min-width: 344px;
    }

    scroll-snap-align: start;
`;
export const Container = styled.div``;
