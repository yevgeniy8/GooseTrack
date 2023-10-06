import { ColumnHeader, ColumnContainer } from './ColumnHeadBar.styled';

const ColumnHeadBar = props => {
    return (
        <ColumnContainer>
            <ColumnHeader>{props.header}</ColumnHeader>
        </ColumnContainer>
    );
};
export default ColumnHeadBar;
