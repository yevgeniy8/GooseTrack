import useAuth from 'hooks/useAuth';

import { Img, FirstLetterOfName } from '../../../Header/UserInfo/UserInfo.styled';
import {
  CardItem,
  CardContainer,
  CardMain,
  CardTitle,
  Container,
  AvatarWrapper,
  StatusHigh,
  StatusMedium,
  StatusLow,
} from './TaskColumnCard.styled';
import TaskToolbar from './TaskToolbar';

const TaskColumnCard = ({ tasks }) => {
  const { user } = useAuth();
  const { name, avatarURL } = user;
  return (
    <>
      {tasks.map(taskData => (
        <CardItem key={taskData._id}>
          <CardContainer>
            <CardTitle>{taskData.title}</CardTitle>
            <CardMain>
              <Container>
                <AvatarWrapper>
                  {(avatarURL === '' || !avatarURL) && name ? (
                    <FirstLetterOfName>{name[0]}</FirstLetterOfName>
                  ) : avatarURL !== '' ? (
                    <Img src={avatarURL} alt={name} />
                  ) : null}
                </AvatarWrapper>
                {taskData.priority === 'high' && <StatusHigh>{taskData.priority}</StatusHigh>}
                {taskData.priority === 'medium' && <StatusMedium>{taskData.priority}</StatusMedium>}
                {taskData.priority === 'low' && <StatusLow>{taskData.priority}</StatusLow>}
              </Container>
              <TaskToolbar taskId={taskData._id} task={taskData}></TaskToolbar>
            </CardMain>
          </CardContainer>
        </CardItem>
      ))}
    </>
  );
};

export default TaskColumnCard;
