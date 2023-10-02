import Modal from '../../Modal/Modal';
import { FeedbackForm } from '../../FeedbackForm/FeedbackForm';

export const AddFeedbackModal = ({ onClose }) => {
    return (
        <Modal onClose={onClose}>
            <FeedbackForm onClose={onClose} />
        </Modal>
    );
};
