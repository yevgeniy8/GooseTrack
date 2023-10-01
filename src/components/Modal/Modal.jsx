import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Backdrop, Modal } from './Modal.styled';

const rootModal = document.querySelector('#modal');

const CreateModal = ({ children, onClose, }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleClose = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return createPortal(
        <Backdrop onClick={handleClose} >
            <Modal >
                    <div>{children}</div>
            </Modal>
        </Backdrop>,
        rootModal
    );
};

export default CreateModal;
