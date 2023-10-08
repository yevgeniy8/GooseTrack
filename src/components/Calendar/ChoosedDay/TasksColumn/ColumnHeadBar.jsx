import { ColumnHeader, ColumnContainer, PlusIcon, TopAddBTN } from './ColumnHeadBar.styled';
import Icons from '../../../../images/icons.svg';
const ColumnHeadBar = ({ header }) => {
  return (
    <ColumnContainer>
      <ColumnHeader>{header}</ColumnHeader>
      <TopAddBTN>
        <PlusIcon>
          <use href={`${Icons}#icon-plus-add`} />
        </PlusIcon>
      </TopAddBTN>
    </ColumnContainer>
  );
};
export default ColumnHeadBar;
