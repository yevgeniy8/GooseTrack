import styled from '@emotion/styled';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    display: flex;
    width: 375px;
    min-height: 100vh;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 768px;
    }

    @media (min-width: 1440px) {
        width: 1440px;
    }
    @media (max-width: 1439.9px) {
        overflow: ${props => (props.sideBareShow ? 'hidden' : 'auto')};
    }
`;

export const ContainerSideBar = styled.div`
    z-index: 100;
    position: absolute;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    left: ${props => (props.sideBareShow ? '0' : '-200%')};

    @media (min-width: 768px) {
        width: 289px;
    }

    @media (min-width: 1440px) {
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

    //можливо треба налаштувати красивий скрол
    overflow: hidden;
    overflow-y: auto;
    //**** */

    width: 100%;
    max-width: 375px;
    min-height: 100%;
    display: flex;
    padding: 24px 20px 40px 20px;
    flex-direction: column;

    @media (min-width: 768px) {
        padding: 25px 32px 38px 32px;
        max-width: 768px;
    }

    @media (min-width: 1440px) {
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

    @media (min-width: 1440px) {
        display: none;
    }
`;
