import styled from '@emotion/styled';
import { tablet, min } from 'styles/media';

export const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: ${({ theme }) => theme.borders.calendar};
    border-radius: 12px;
    overflow: hidden;
    ${props => props.fullheight}
    ${props =>
        props.fullheight &&
        `grid-template-rows: repeat(${props.is28Days ? 4 : 5}, 1fr);`}
    div {
        display: flex;
        gap: 8px;
        justify-content: space-around;
        flex-direction: column;
        align-items: flex-end;
        padding: 4px;
        overflow: hidden;
        height: 95px;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        border: ${({ theme }) => theme.borders.calendar};

        transition: ${({ theme }) =>
            `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, border ${theme.animations.duration} ${theme.animations.cubicBezier}`};

        ${min(tablet)} {
            gap: 4px;
            max-width: 156px;
            height: 125px;
        }
        span {
            font-family: Inter;
            font-size: 12px;
            font-weight: 700;
            line-height: 14px;
            letter-spacing: 0em;
            text-align: center;
            width: 22px;
            height: 22px;
            border-radius: 8px;
            padding: 4px 6px;

            color: ${({ theme }) => theme.colors.textPrimary};

            transition: ${({ theme }) =>
                `color ${theme.animations.duration} ${theme.animations.cubicBezier}`};

            ${min(tablet)} {
                font-size: 16px;
                font-weight: 700;
                line-height: 18px;
                width: 26px;
                height: 26px;
            }
        }

        span.active {
            color: ${({ theme }) => theme.colors.white};
            background-color: ${({ theme }) => theme.colors.brand};
        }
    }
`;
