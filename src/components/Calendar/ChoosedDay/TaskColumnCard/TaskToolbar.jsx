import { CardEditMenu, CardEditBtn } from './TaskColumnCard.styled';
// import task from '../../data/tasksdata.json';

// const TaskColumnCard = () => {

//   return (
//     <>
//       {task.map(taskData => (

//       ))}
//     </>
//   );
// };

const TaskToolbar = () => {
  const handleAddClick = () => {
    // Добавить обработчик для кнопки "Добавить"
    alert('Вы нажали на кнопку "Добавить"');
  };

  const handleEditClick = () => {
    // Добавить обработчик для кнопки "Редактировать"
    alert('Вы нажали на кнопку "Редактировать"');
  };

  const handleDeleteClick = () => {
    // Добавить обработчик для кнопки "Удалить"
    alert('Вы нажали на кнопку "Удалить"');
  };
  return (
    <>
      <CardEditMenu>
        <CardEditBtn onClick={handleAddClick}>Пер.</CardEditBtn>
        <CardEditBtn onClick={handleEditClick}>Ред.</CardEditBtn>
        <CardEditBtn onClick={handleDeleteClick}>Удал.</CardEditBtn>
      </CardEditMenu>
    </>
  );
};
export default TaskToolbar;
