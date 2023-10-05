import { Modal } from '../Modal/Modal';
import { TaskForm } from './TaskForm/TaskForm';

export const TaskModal = ({ onClose, action }) => {
    return (
        <Modal onClose={onClose}>
            <TaskForm onClose={onClose} action={action} />
        </Modal>
    );
};