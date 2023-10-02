import { Btn } from './AddFeedbackBtn.styled';

import { useState } from 'react';
import { AddFeedbackModal } from '../AddFeedbackModal/AddFeedbackModal';

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
            {showModal && <AddFeedbackModal onClose={closeModal}  />}
        </div>
    );
};

export default AddFeedbackBtn;
