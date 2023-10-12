import styled from '@emotion/styled';
import { tablet, desktop, min } from 'styles/media';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    display: flex;
    width: 375px;
    min-height: 100vh;
    margin: 0 auto;

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}, overflow ${theme.animations.duration} ${theme.animations.cubicBezier}`};
    ${min(tablet)} {
        width: 768px;
    }

    ${min(desktop)} {
        width: 1440px;
    }

    @media (max-width: 1439.9px) {
        overflow: ${props => (props.sideBareShow ? 'hidden' : 'auto')};
    }
`;

export const ContainerSideBar = styled.div`
    z-index: 100;
    position: absolute;
    transition: ${({ theme }) =>
        `left ${theme.animations.duration} ${theme.animations.cubicBezier}`};
    left: ${props => (props.sideBareShow ? '0' : '-200%')};

    ${min(tablet)} {
        width: 289px;
    }

    ${min(desktop)} {
        position: relative;
        left: 0;
    }
`;

export const LeftField = styled.div`
    position: absolute;
    right: 100%;
    top: 0;
    height: 100%;
    width: 100vw;
`;

export const Section = styled.div`
    position: relative;

    overflow: hidden;
    overflow-y: auto;

    width: 100%;
    max-width: 375px;
    min-height: 100%;
    display: flex;
    padding: 24px 20px 40px 20px;
    flex-direction: column;

    ${min(tablet)} {
        padding: 25px 32px 38px 32px;
        max-width: 768px;
    }

    ${min(desktop)} {
        padding: 41px 32px 32px 32px;
        min-width: 1151px;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: rgba(62, 133, 243, 0.2);
    z-index: 5;

    transition: ${({ theme }) =>
        `background-color ${theme.animations.duration} ${theme.animations.cubicBezier}`};

    ${min(desktop)} {
        display: none;
    }
`;
