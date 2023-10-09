import styled from '@emotion/styled';
import { desktop, min } from '../../../../styles/media';

export const ColumnList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    // height: 100vh;
    overflow: auto hidden;
    scroll-snap-type: x mandatory;

    ${min(desktop)} {
        gap: 27px;
    }

    &::-webkit-scrollbar {
        width: 8px;
        scrollbar-placement: bottom;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 12px;

        background: ${({ theme }) => theme.colors.horizontalScroll};
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) =>
            theme.colors.backgroundHorizontalScroll};
    }
`;
