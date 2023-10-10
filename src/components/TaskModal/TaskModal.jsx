import Modal from '../Modal/Modal';
import { TaskForm } from './TaskForm/TaskForm';

export const TaskModal = ({ action, value, closeModal, task }) => {
    return (
        <Modal onClose={closeModal}>
            <TaskForm
                action={action}
                value={value}
                onClose={closeModal}
                task={task}
            />
        </Modal>
    );
};
