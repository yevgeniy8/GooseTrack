import { ColumnHeader, ColumnContainer } from './ColumnHeadBar.styled';
import { PlusIcon } from './AddBtns.styled';
import Icons from '../../../../images/icons.svg';
import AddTopBtn from './AddTopBtn';
const ColumnHeadBar = ({ header, value }) => {
  return (
    <ColumnContainer>
      <ColumnHeader>{header}</ColumnHeader>
      <AddTopBtn value={value}>
        <PlusIcon>
          <use href={`${Icons}#icon-plus-add`} />
        </PlusIcon>
      </AddTopBtn>
    </ColumnContainer>
  );
};
export default ColumnHeadBar;
