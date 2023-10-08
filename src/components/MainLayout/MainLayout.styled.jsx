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
`;

export const Section = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 24px 20px 40px 20px;
    flex-direction: column;

    @media (min-width: 768px) {
        padding: 25px 32px 38px 32px;
    }

    @media (min-width: 1440px) {
        max-width: 1151px;
        padding: 41px 32px 32px 32px;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
`;
