// чистий код

// import { useEffect } from "react";
// import { createPortal } from "react-dom";

// import { Backdrop, Modal, CloseModal } from './Modal.styled';

// const rootModal = document.querySelector('#modal');

// const CreateModal = ({ children, onClose, }) => {
//     useEffect(() => {
//         const handleKeyDown = e => {
//             if (e.code === 'Escape') {
//                 onClose();
//             }
//         };
//         window.addEventListener('keydown', handleKeyDown);

//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [onClose]);

//     const handleClose = e => {
//         if (e.target === e.currentTarget) {
//             onClose();
//         }
//     };
//     return createPortal(
//         <Backdrop >
//             <Modal onClick={handleClose}>
//                 <CloseModal onClick={onClose}/>
//                     <div>{children}</div>
//             </Modal>
//         </Backdrop>,
//         rootModal
//     );
// };

// export default CreateModal;



// щоб рпацювало

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal, CloseModal } from './Modal.styled';

const rootModal = document.querySelector('#modal');

const CreateModal = ({ children, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        onClose(); 
    };

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, closeModal]);

    const handleClose = e => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            <button onClick={openModal}>Відкрити модалку</button>
            {isOpen &&
                createPortal(
                    <Backdrop onMouseDown={handleClose}>
                        <Modal>
                            <CloseModal onClick={closeModal} />
                            <div onClick={handleClose}>{children}</div>
                        </Modal>
                    </Backdrop>,
                    rootModal
                )}
        </>
    );
};

export default CreateModal;
