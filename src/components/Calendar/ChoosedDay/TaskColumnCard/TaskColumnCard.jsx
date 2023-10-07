import Avatar from '../../../../images/Avatar.png';
import {
    CardItem,
    CardContainer,
    CardMain,
    CardTitle,
    Container,
    AvatarWrapper,
    AvatarStyle,
    StatusHigh,
    StatusMedium,
    StatusLow,
} from './TaskColumnCard.styled';

import TaskToolbar from './TaskToolbar';

const TaskColumnCard = ({ tasksCategoryName, tasksByCategory }) => {
    return (
        <>
            {tasksByCategory.map(taskData => (
                <CardItem key={taskData.id}>
                    <CardContainer>
                        <CardTitle>{taskData.title}</CardTitle>
                        <CardMain>
                            <Container>
                                <AvatarWrapper>
                                    <AvatarStyle src={Avatar} alt="avatar" />
                                </AvatarWrapper>
                                {taskData.priority === 'high' && (
                                    <StatusHigh>{taskData.priority}</StatusHigh>
                                )}
                                {taskData.priority === 'medium' && (
                                    <StatusMedium>
                                        {taskData.priority}
                                    </StatusMedium>
                                )}
                                {taskData.priority === 'low' && (
                                    <StatusLow>{taskData.priority}</StatusLow>
                                )}
                            </Container>
                            <TaskToolbar
                                tasksCategoryName={tasksCategoryName}
                            ></TaskToolbar>
                        </CardMain>
                    </CardContainer>
                </CardItem>
            ))}
        </>
    );
};

export default TaskColumnCard;
