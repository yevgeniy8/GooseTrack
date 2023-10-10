// import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
// import { useState } from 'react';

const TaskList = ({ currentDate, day, tasks, openModal }) => {
    if (!day) {
        return;
    }
    const formattedDay = day.toString().padStart(2, '0');
    const date = currentDate + '-' + formattedDay;
    const filterTasks = tasks.filter(task => task.date === date);

    return (
        <List>
            {filterTasks?.map(task => (
                <Task
                    onClick={() => {
                        openModal(task._id);
                    }}
                    key={task._id}
                    color={`color${task.priority}`} //подтянется, когда пропишем цвета в переменных
                    bg={`bgcolor${task.priority}`} //подтянется, когда пропишем цвета в переменных
                >
                    {task.title}
                </Task>
            ))}
        </List>
    );
};

export default TaskList;

const List = styled.ul`
    list-style: none;
    height: 65px;
    max-width: 44px;
    padding: 2px;
    margin: 0;
    overflow: hidden;
    // overflow-y: auto;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        max-width: 100%;
        padding: 4px;
    }
`;
const Task = styled.li`
    padding: 2px 4px;
    border-radius: 8px;
    margin-bottom: 8px;
    max-width: 100%;
    color: #3E85F3; //временно, чтобы увидеть стили
    background-color: #CEEEFD; //временно, чтобы увидеть стили
    // background-color: ${props => props.bg};
    // color: ${props => props.color};
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    white-space: nowrap; /* Текст не переносится */
    overflow: hidden; /* Обрезаем всё за пределами блока */
    text-overflow: ellipsis; /* Добавляем многоточие */
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: 14px;
        line-height: 18px;
        padding: 4px 10px;
  };
    `
// прописать в переменных, чтобы подтянуть цвет динамически
// формат нужет без камелкейса, т.к. приоритет приходит с мал.буквы
    
    export const priorityColors = {
    colorLow: '#3E85F3',
    bgColorLow: '#CEEEFD',
    colorMedium: '#F3B249',
    bgColorMedium: '#FCF0D4',
    colorHgh: '#EA3D65',
    bgColorHigh: '#FFD2DD',
};
