import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
`;

export const Section = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.backgroundPrimar};
`;
