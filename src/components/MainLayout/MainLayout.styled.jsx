import styled from '@emotion/styled';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    display: flex;
    max-width: 375px;
    min-height: 100vh;
    margin: 0 auto;

    @media (min-width: 376px) {
        max-width: 767px;
    }

    @media (min-width: 768px) {
        min-width: 768px;
        max-width: 1439px;
    }

    @media (min-width: 1440px) {
        width: 1440px;
    }
`;

export const Section = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    // padding: 24px 20px 40px 20px;
    flex-direction: column;

    @media (min-width: 768px) {
        // padding: 25px 32px 38px 32px;
    }

    @media (min-width: 1440px) {
        // padding: 41px 32px 32px 32px;
    }
`;
