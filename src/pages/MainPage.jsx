import AuthSection from 'components/AuthSection/AuthSection';
import Description from 'components/Description/Description';
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';

import { Container } from 'components/Description/Description.styled';

import React from 'react';
import styled from '@emotion/styled';

const MainPage = () => {
    return (
        <Wrapper>
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
