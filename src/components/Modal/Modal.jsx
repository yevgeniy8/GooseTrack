// чистий код

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
        <Backdrop >
            <Modal onClick={handleClose}>
                {/* <CloseModal onClick={onClose}/> */}
                    <div>{children}</div>
            </Modal>
        </Backdrop>,
        rootModal
    );
};

export default CreateModal;



// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';

// import { ModalDiv, Overlay } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

// export const Modal = ({ onClose, children }) => {
//     useEffect(() => {
//         document.body.style.overflow = 'hidden';

//         const closeModalByEsc = e => {
//             if (e.code === 'Escape') {
//                 onClose();
//             }
//         };

//         document.addEventListener('keydown', closeModalByEsc);

//         return () => {
//             document.body.style.overflow = 'auto';

//             document.removeEventListener('keydown', closeModalByEsc);
//         };
//     }, [onClose]);

//     const handleOverlayClick = e => {
//         if (e.target === e.currentTarget) {
//             onClose();
//         }
//     };

//     return createPortal(
//         <Overlay onClick={handleOverlayClick}>
//             <ModalDiv>{children}</ModalDiv>
//         </Overlay>,
//         modalRoot
//     );
// };