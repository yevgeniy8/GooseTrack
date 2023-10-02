import styled from '@emotion/styled';

export const Ulka = styled.ul`
  list-style: none;
  gap: 18px;
  display: flex;
  flex-direction: column;
  padding: 0px;
`;
export const Container = styled.div`
  display: flex;
  gap: 27px; /* Устанавливаем отступ между Colonka */
  width: 1200px;
  margin-left: auto;
`;
export const Colonka = styled.div`
  flex-basis: calc((100% - 2 * 27px) / 3);
  background: snow;
  padding: 20px; /* Устанавливаем отступы внутри Colonka */
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;
  min-width: 135px;
`;
export const AddTaskBtn = styled.button`
  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background: #e3f3ff;

  display: flex;
  height: 52px;
  width: 100%;

  justify-content: center;
  align-items: center;
  gap: 10px;

  left: 20px;
  bottom: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background: #cbe6ff; /* Изменение цвета при наведении */
  }

  &:focus {
    outline: none; /* Убрать фокусовую обводку */
    box-shadow: 0 0 4px #3e85f3; /* Добавить тень при фокусе */
  }
`;
export const TaskLi = styled.li`
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #f7f6f9;
`;
