import styled from '@emotion/styled';
import { tablet, mobile, desktop, min } from '../../../../styles/media';

export const ColumnList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    // overflow: auto hidden;
    // scroll-snap-type: x mandatory;

    ${min(desktop)} {
        gap: 27px;
    }
`;

export const Wrapper = styled.div`
    height: 100vh;

    background-color: red;

    overflow: auto hidden;

    width: 100%;

    ${min(mobile)} {
        max-height: 432px;
        max-width: 335px;
    }
    ${min(tablet)} {
        max-width: 1024px;
    }

    ${min(desktop)} {
        max-width: 1087px;
    }

    scroll-snap-type: x mandatory;
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
