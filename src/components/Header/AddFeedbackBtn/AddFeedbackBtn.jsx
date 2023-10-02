import { Btn } from './AddFeedbackBtn.styled';

import { useState } from 'react';
import { FeedbackModal } from '../../FeedbackForm/FeedbackModal';

const AddFeedbackBtn = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Btn onClick={openModal} type="button">
                Feedback
            </Btn>
            {showModal && <FeedbackModal onClose={closeModal} />}
        </div>
    );
};

export default AddFeedbackBtn;

// import { Btn } from './AddFeedbackBtn.styled';

// const AddFeedbackBtn = ({ showModal }) => {
//     return (
//         <Btn onClick={showModal} type="button">
//             Feedback
//         </Btn>
//     );
// };

// export default AddFeedbackBtn;
