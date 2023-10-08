import { ColumnHeader, ColumnContainer, PlusIcon } from './ColumnHeadBar.styled';
import Icons from '../../../../images/icons.svg';
const ColumnHeadBar = ({ header }) => {
  return (
    <ColumnContainer>
      <ColumnHeader>{header}</ColumnHeader>
      <PlusIcon>
        <use href={`${Icons}#icon-plus-add`} />
      </PlusIcon>
    </ColumnContainer>
  );
};
export default ColumnHeadBar;
