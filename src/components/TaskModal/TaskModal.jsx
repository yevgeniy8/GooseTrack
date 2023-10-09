import Modal from '../Modal/Modal';
import { TaskForm } from './TaskForm/TaskForm';

export const TaskModal = ({ value, closeModal }) => {
    return (
        <Modal onClose={closeModal}>
            <TaskForm value={value} onClose={closeModal} />
        </Modal>
    );
};
