import Icons from '../../../../images/icons.svg';
import { BtnToAdd, IconX } from './ColumnsTasksList.styled';
import { TaskModal } from '../../../TaskModal/TaskModal';
import React, { useState } from 'react';

const TopAddBtn = ({ value }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <BtnToAdd onClick={openModal}>
        <IconX>
          <use href={`${Icons}#add-plus`} />
        </IconX>
        Add task
      </BtnToAdd>
      {modalOpen && <TaskModal value={value} closeModal={closeModal} />}
    </>
  );
};

export default TopAddBtn;
