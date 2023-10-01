import { Btn } from './AddFeedbackBtn.styled';

const AddFeedbackBtn = ({ showModal }) => {
    return (
        <Btn onClick={showModal} type="button">
            Feedback
        </Btn>
    );
};

export default AddFeedbackBtn;
