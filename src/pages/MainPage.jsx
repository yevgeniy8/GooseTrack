import AuthSection from 'components/AuthSection/AuthSection';
import Description from 'components/Description/Description';
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';

import { Container } from 'components/Description/Description.styled';

import React from 'react';
import styled from '@emotion/styled';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body {
        background-color: white;
    }
`;

const MainPage = () => {
    return (
        <Wrapper>
            <GlobalStyles />
            <AuthSection />
            <Container>
                <Description />
                <ReviewsSlider />
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: white;
`;

export default MainPage;
