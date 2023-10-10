import  Modal  from '../Modal/Modal';
import { TaskForm } from './TaskForm/TaskForm';

export const TaskModal = ({ closeModal, action, initialData = {}, column }) => {
    return (
        <Modal onClose={closeModal}>
            <TaskForm
                onClose={closeModal}
                action={action}
                initialData={initialData}
                column={column}
            />
        </Modal>
    );
};