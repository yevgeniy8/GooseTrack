import Icons from '../../../../images/icons.svg';
import { TaskModal } from '../../../TaskModal/TaskModal';
import React, { useState } from 'react';
import { PlusIcon, TopBtn } from './AddBtns.styled';

const TopAddBtn = ({ value }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <TopBtn onClick={openModal}>
        <PlusIcon>
          <use href={`${Icons}#icon-plus-add`} />
        </PlusIcon>
      </TopBtn>
      {modalOpen && <TaskModal value={value} closeModal={closeModal} />}
    </>
  );
};

export default TopAddBtn;
