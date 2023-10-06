import Icons from '../../../../images/icons.svg';
import { Icon, CardEditMenu, CardEditBtn } from './TaskToolbar.styled';
import {} from './TaskColumnCard.styled';

const TaskToolbar = () => {
  const handleAddClick = () => {
    alert('Вы нажали на кнопку "Добавить"');
  };

  const handleEditClick = () => {
    alert('Вы нажали на кнопку "Редактировать"');
  };

  const handleDeleteClick = () => {
    alert('Вы нажали на кнопку "Удалить"');
  };
  return (
    <>
      <CardEditMenu>
        <li>
          <CardEditBtn type="button" onClick={handleAddClick}>
            <Icon>
              <use href={`${Icons}#arrow-circle-broken-right`} />
            </Icon>
          </CardEditBtn>
        </li>
        <li>
          <CardEditBtn type="button" onClick={handleEditClick}>
            <Icon>
              <use href={`${Icons}#pencil`} />
            </Icon>
          </CardEditBtn>
        </li>
        <li>
          <CardEditBtn type="button" onClick={handleDeleteClick}>
            <Icon>
              <use href={`${Icons}#trash`} />
            </Icon>
          </CardEditBtn>
        </li>
      </CardEditMenu>
    </>
  );
};
export default TaskToolbar;
