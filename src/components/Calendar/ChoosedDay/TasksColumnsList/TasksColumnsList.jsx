import { ColumnList } from './TasksColumnsList.styled';

import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = () => {
    return (
        // <Container>
        <ColumnList>
            <TasksColumn></TasksColumn>
            <TasksColumn></TasksColumn>
            <TasksColumn></TasksColumn>
        </ColumnList>
        // </Container>
    );
};
export default TasksColumnsList;
