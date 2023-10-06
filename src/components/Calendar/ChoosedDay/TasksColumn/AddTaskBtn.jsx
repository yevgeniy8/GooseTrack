// import { BtnToAdd } from './ColumnsTasksList.styled';

// const AddTaskBtn = () => {
//   return <BtnToAdd>S+</BtnToAdd>;
// };

// export default AddTaskBtn;

import { BtnToAdd } from './ColumnsTasksList.styled';
import { TaskModal } from '../../../TaskModal/TaskModal';
import React, { useState } from 'react';

const AddTaskBtn = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            <BtnToAdd onClick={openModal}>S+</BtnToAdd>
            {modalOpen && <TaskModal closeModal={closeModal} />}
        </div>
    );
};

export default AddTaskBtn;
