import React from 'react';
import {
  CardItem,
  CardContainer,
  CardMain,
  CardStatus,
  CardTitle,
  Container,
  StatusLow,
  StatusMedium,
  StatusHigh,
} from './TaskColumnCard.styled';
import TaskToolbar from './TaskToolbar';

const TaskColumnCard = ({ tasks }) => {
  return (
    <>
      {tasks.map(taskData => (
        <CardItem key={taskData.id}>
          <CardContainer>
            <CardTitle>{taskData.title}</CardTitle>
            <CardMain>
              <Container>
                AVA
                <CardStatus>
                  {taskData.priority === 'high' && <StatusHigh>{taskData.priority}</StatusHigh>}
                  {taskData.priority === 'medium' && (
                    <StatusMedium>{taskData.priority}</StatusMedium>
                  )}
                  {taskData.priority === 'low' && <StatusLow>{taskData.priority}</StatusLow>}
                </CardStatus>
              </Container>
              <TaskToolbar></TaskToolbar>
            </CardMain>
          </CardContainer>
        </CardItem>
      ))}
    </>
  );
};

export default TaskColumnCard;
