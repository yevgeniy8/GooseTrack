import { ColumnHeader, ColumnContainer } from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ title }) => {
    // switch (title) {
    //     case 'to-do':
    //         return 'To do';
    //     case 'in-progress':
    //         return 'In progress';
    //     case 'done':
    //         return 'Done';
    //     default:
    //         break;
    // }

    return (
        <ColumnContainer>
            <ColumnHeader>{title}</ColumnHeader>
        </ColumnContainer>
    );
};
export default ColumnHeadBar;
