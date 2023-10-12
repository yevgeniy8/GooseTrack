import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../redux/reviews/reviewsOperations';
import ReviewCard from './ReviewCard';
import {
    ReviewTitle,
    ReviewsCardsContainer,
    ButtonLeft,
    ButtonRigth,
    Span,
    ReviewsSliderSection,
    SVG,
} from './ReviewSlider.styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import '../../../node_modules/swiper/modules/autoplay.min.css';

const slidArrowRight = (
    <SVG
        width="61"
        height="61"
        viewBox="0 0 33 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
    >
        <path d="M21.936 14.79l1.203 0.818-22.877 0.001v0.64l22.733-0.001-1.133 0.651 0.319 0.555 2.608-1.498-2.493-1.695-0.36 0.529z"></path>
    </SVG>
);

const slidArrowLeft = (
    <SVG
        width="61"
        height="61"
        viewBox="0 0 33 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
    >
        <path d="M7.966 17.067l-1.203-0.818 22.877-0.001v-0.64l-22.733 0.001 1.133-0.651-0.319-0.555-2.608 1.498 2.493 1.695 0.36-0.529z"></path>
    </SVG>
);

const ReviewsSlider = () => {
    const dispatch = useDispatch();
    const reviewsObject = useSelector(state => state.reviews.reviews);
    const reviewsArray = reviewsObject?.reviews || [];

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const swiperRef = useRef(null);

    useEffect(() => {
        dispatch(fetchReviews({ page: 1, limit: 4 }))
            .then(() => {
                setIsDataLoaded(true);
                if (swiperRef.current && swiperRef.current.swiper) {
                    swiperRef.current.swiper.update();
                }
            })
            .catch(error => {
                setIsDataLoaded(true);
            });
    }, [dispatch]);

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current.swiper.slideNext();
    };

    if (!isDataLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <ReviewsSliderSection>
            <ReviewTitle>Reviews</ReviewTitle>
            <ReviewsCardsContainer>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    ref={swiperRef}
                    spaceBetween={24}
                    slidesPerView={1}
                    loopedSlides={2}
                    allowTouchMove={true}
                    freeMode={true}
                    loop={true}
                    style={{ width: '100%', height: 'auto' }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    speed={500}
                    effect="slide"
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1440: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {reviewsArray.map(review => (
                        <SwiperSlide key={review._id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ReviewsCardsContainer>

            <div>
                <ButtonLeft onClick={handlePrev}>
                    <Span>{slidArrowLeft}</Span>
                </ButtonLeft>

                <ButtonRigth onClick={handleNext}>{slidArrowRight}</ButtonRigth>
            </div>
        </ReviewsSliderSection>
    );
};

export default ReviewsSlider;
