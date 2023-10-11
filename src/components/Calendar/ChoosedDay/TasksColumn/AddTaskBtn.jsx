import Icons from '../../../../images/icons.svg';
import { BtnToAdd, IconX } from './AddBtns.styled';
import { TaskModal } from '../../../TaskModal/TaskModal';
import React, { useState } from 'react';
import moment from 'moment';

const AddTaskBtn = ({ value }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <BtnToAdd
        type="button"
        onClick={openModal}
        disabled={localStorage.getItem('date') < moment().format('YYYY-MM-DD')}
      >
        <IconX>
          <use href={`${Icons}#add-plus`} />
        </IconX>
        Add task
      </BtnToAdd>
      {modalOpen && <TaskModal value={value} closeModal={closeModal} />}
    </>
  );
};

export default AddTaskBtn;
