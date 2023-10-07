import { useEffect } from 'react';
import { Btn } from './AddFeedbackBtn.styled';
import { fetchReviewById } from 'redux/reviews/reviewsOperations';
import { useDispatch } from 'react-redux';

const AddFeedbackBtn = ({ showModal }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('1');
        dispatch(fetchReviewById());
    }, [dispatch]);
    return (
        <Btn onClick={showModal} type="button">
            Feedback
        </Btn>
    );
};

export default AddFeedbackBtn;
