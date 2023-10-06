import AuthSection from 'components/AuthSection/AuthSection';
import Description from 'components/Description/Description';
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';

import { Container } from 'components/Description/Description.styled';

import React from 'react';

const MainPage = () => {
    return (
        <div>
            <AuthSection />
            <Container>
                <Description />
                <ReviewsSlider />
            </Container>
        </div>
    );
};

export default MainPage;
