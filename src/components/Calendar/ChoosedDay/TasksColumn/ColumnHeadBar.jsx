import { ColumnHeader, ColumnContainer, PlusIcon, TopAddBTN } from './ColumnHeadBar.styled';
import Icons from '../../../../images/icons.svg';
import TopAddBtn from './TopAddBtn';
const ColumnHeadBar = ({ header, value }) => {
  return (
    <ColumnContainer>
      <ColumnHeader>{header}</ColumnHeader>
      <TopAddBtn value={value} />
      <PlusIcon>
        <use href={`${Icons}#icon-plus-add`} />
      </PlusIcon>
    </ColumnContainer>
  );
};
export default ColumnHeadBar;
