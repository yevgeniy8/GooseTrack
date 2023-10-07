import { ColumnHeader, ColumnContainer } from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ header }) => {
    return (
        <ColumnContainer>
            <ColumnHeader>{header}</ColumnHeader>
        </ColumnContainer>
    );
};
export default ColumnHeadBar;
