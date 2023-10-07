import { ColumnHeader, ColumnContainer } from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ title }) => {
    return (
        <ColumnContainer>
            <ColumnHeader>{title}</ColumnHeader>
        </ColumnContainer>
    );
};
export default ColumnHeadBar;
