import  Modal  from '../Modal/Modal';
import { TaskForm } from './TaskForm/TaskForm';

export const TaskModal = ({ closeModal}) => {
    return (
        <Modal onClose={closeModal}>
            <TaskForm onClose={closeModal} />
        </Modal>
    );
};