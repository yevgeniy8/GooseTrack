import {
    CardItem,
    CardContainer,
    CardMain,
    CardStatus,
    CardTitle,
    Container,
} from './TaskColumnCard.styled';
import task from '../data/tasksdata.json';
import TaskToolbar from './TaskToolbar';

const TaskColumnCard = () => {
    return (
        <>
            {task.map(taskData => (
                <CardItem key={taskData.id}>
                    <CardContainer>
                        <CardTitle>{taskData.title}</CardTitle>
                        <CardMain>
                            <Container>
                                AVA <CardStatus>{taskData.priority}</CardStatus>
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
