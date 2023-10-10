import Icons from '../../../../images/icons.svg';
import {
    Icon,
    CardEditMenu,
    CardEditBtn,
    CtgPopUp,
    CtgPopBtn,
} from './TaskToolbar.styled';
// import {} from './TaskColumnCard.styled';

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
    // Кнопка вызова категорий
    const handleChangeCtgOpen = () => {
        setShowCtgPopUp(prevState => !prevState);
    };

    const handleChangeCtg = category => {
        setShowCtgPopUp(prevState => !prevState);
        dispatch(editTask({ id: taskId, task: { category: category } }));
    };
    // Кнопка редактирования таски
    const handleEditClick = () => {
        setIsOpenModal(true);
    };
    const closeModal = () => {
        setIsOpenModal(false);
    };
    // Кнопка удаления
    const handleDeleteClick = () => {
        dispatch(deleteTask(taskId));
    };

    return (
        <>
            <CardEditMenu>
                <li>
                    {/* Кнопка стрелка, которая вызывает список категорий с маленьким попапом */}
                    <CardEditBtn type="button" onClick={handleChangeCtgOpen}>
                        <Icon>
                            <use href={`${Icons}#arrow-circle-broken-right`} />
                        </Icon>
                    </CardEditBtn>
                    {/* Сам попап с кнопками категорий */}
                    {showCtgPopUp && (
                        <CtgPopUp>
                            {/* 1 кнопка категории */}
                            <CtgPopBtn
                                type="button"
                                onClick={() => {
                                    handleChangeCtg(filteredCategory[0]);
                                }}
                            >
                                {filteredCategory[0]}
                                <Icon>
                                    <use
                                        href={`${Icons}#arrow-circle-broken-right`}
                                    />
                                </Icon>
                            </CtgPopBtn>
                            {/* 2 кнопка категории */}
                            <CtgPopBtn
                                type="button"
                                onClick={() => {
                                    handleChangeCtg(filteredCategory[1]);
                                }}
                            >
                                {filteredCategory[1]}
                                <Icon>
                                    <use
                                        href={`${Icons}#arrow-circle-broken-right`}
                                    />
                                </Icon>
                            </CtgPopBtn>
                        </CtgPopUp>
                    )}
                </li>

                {/* Остальные 2 кнопки в меню редактирования, уже сделанные */}
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
                <TaskModal
                    action={'edit'}
                    closeModal={closeModal}
                    task={task}
                />
            )}
        </>
    );
};
export default TaskToolbar;
