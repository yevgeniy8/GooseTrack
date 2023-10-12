import Icons from '../../../../images/icons.svg';
import { Icon, CardEditMenu, CardEditBtn, CtgPopUp, CtgPopBtn } from './TaskToolbar.styled';

import { deleteTask, editTask } from 'redux/calendar/calendarOperations';

import { TaskModal } from 'components/TaskModal/TaskModal';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

const TaskToolbar = ({ taskId, task }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showCtgPopUp, setShowCtgPopUp] = useState(false);

  const categoryList = ['to-do', 'in-progress', 'done'];
  const filteredCategory = categoryList.filter(el => el !== task.category);

  const dispatch = useDispatch();

  const handleChangeCtgOpen = () => {
    setShowCtgPopUp(prevState => !prevState);
  };

  const handleChangeCtg = category => {
    setShowCtgPopUp(prevState => !prevState);
    dispatch(editTask({ id: taskId, task: { category: category } }));
  };

  const handleEditClick = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const handleDeleteClick = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <CardEditMenu>
        <li>
          <CardEditBtn type="button" aria-label="change-category" onClick={handleChangeCtgOpen}>
            <Icon>
              <use href={`${Icons}#arrow-circle-broken-right`} />
            </Icon>
          </CardEditBtn>
          {showCtgPopUp && (
            <CtgPopUp>
              <CtgPopBtn
                type="button"
                aria-label="first-category"
                onClick={() => {
                  handleChangeCtg(filteredCategory[0]);
                }}
              >
                {filteredCategory[0]}
                <Icon>
                  <use href={`${Icons}#arrow-circle-broken-right`} />
                </Icon>
              </CtgPopBtn>
              <CtgPopBtn
                type="button"
                aria-label="second-category"
                onClick={() => {
                  handleChangeCtg(filteredCategory[1]);
                }}
              >
                {filteredCategory[1]}
                <Icon>
                  <use href={`${Icons}#arrow-circle-broken-right`} />
                </Icon>
              </CtgPopBtn>
            </CtgPopUp>
          )}
        </li>
        <li>
          <CardEditBtn type="button" aria-label="edit-card" onClick={handleEditClick}>
            <Icon>
              <use href={`${Icons}#pencil`} />
            </Icon>
          </CardEditBtn>
        </li>
        <li>
          <CardEditBtn type="button" aria-label="delete-card" onClick={handleDeleteClick}>
            <Icon>
              <use href={`${Icons}#trash`} />
            </Icon>
          </CardEditBtn>
        </li>
      </CardEditMenu>

      {isOpenModal && <TaskModal action={'edit'} closeModal={closeModal} task={task} />}
    </>
  );
};
export default TaskToolbar;
