import Icons from '../../../../images/icons.svg';
import { Icon, CardEditMenu, CardEditBtn } from './TaskToolbar.styled';
import {} from './TaskColumnCard.styled';

import { deleteTask } from 'redux/calendar/calendarOperations';

import { TaskModal } from 'components/TaskModal/TaskModal';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

const TaskToolbar = ({ taskId }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useDispatch();

    const handleEditClick = () => setIsOpenModal(true);
    const closeModal = () => {
        setIsOpenModal(false);
    };

    const handleAddClick = () => {
        alert('Вы нажали на кнопку "Добавить"');
    };

    // const handleEditClick = () => {
    //     setIsOpenModal(!isOpenModal);
    //     // alert('Вы нажали на кнопку "Редактировать"');
    // };

    const handleDeleteClick = () => {
        dispatch(deleteTask(taskId));
        // alert('Вы нажали на кнопку "Удалить"');
    };

    return (
        <>
            <CardEditMenu>
                <li>
                    <CardEditBtn type="button" onClick={handleAddClick}>
                        <Icon>
                            <use href={`${Icons}#arrow-circle-broken-right`} />
                        </Icon>
                    </CardEditBtn>
                </li>
                <li>
                    <CardEditBtn type="button" onClick={handleEditClick}>
                        <Icon>
                            <use href={`${Icons}#pencil`} />
                        </Icon>
                    </CardEditBtn>
                </li>
                <li>
                    <CardEditBtn type="button" onClick={handleDeleteClick}>
                        <Icon>
                            <use href={`${Icons}#trash`} />
                        </Icon>
                    </CardEditBtn>
                </li>
            </CardEditMenu>

            {isOpenModal && (
                <TaskModal action={'edit'} closeModal={closeModal} />
            )}
        </>
    );
};
export default TaskToolbar;
