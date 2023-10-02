import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../redux/reviews/reviewsOperations';
import ReviewCard from './ReviewCard';
import { Container, ReviewTitle, CardsContainer } from './ReviewSlider.styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import '../../../node_modules/swiper/modules/autoplay.min.css';
import '../../../node_modules/swiper/modules/navigation.min.css';

// SwiperCore.use([Autoplay]);

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
                console.error('Error fetching reviews:', error);
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
        <Container>
            <ReviewTitle>Reviews</ReviewTitle>
            <CardsContainer>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    ref={swiperRef}
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    style={{ width: '1184px' }}
                    autoplay={{ delay: 5000 }}
                    // onSwiper={swiper => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {reviewsArray.map(review => (
                        <SwiperSlide key={review._id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CardsContainer>
            <div>
                <button onClick={handlePrev}>Назад</button>
                <button onClick={handleNext}>Вперед</button>
            </div>
        </Container>
    );
};

export default ReviewsSlider;
