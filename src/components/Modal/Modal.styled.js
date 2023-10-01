import styled from '@emotion/styled';
// import { IoMdClose } from 'react-icons/io';

export const Backdrop = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const Modal = styled.div`
    position: absolute;
    /* border: 1px solid rgba(220, 227, 229, 0.8);
    box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
    border-radius: 8px;
    max-width: 95%;
    padding: 48px 18px 40px; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: #f1f1ed; */
    /* background-color: ${{}}; */

    /* @media (min-width: 375px) {
        width: 300px;
    }

    @media (min-width: 768px) {
        width: 396px;
        height: 360px;
        padding: 40px 28px;
    /* } */
`; 

// export const CloseModal = styled(IoMdClose)`
//     position: absolute;
//     top: 19px;
//     right: 19px;
//     width: 24px;
//     height: 24px;
//     transition: all 250ms;
//     cursor: pointer;
    
    
//     &:hover,
//     &:focus {

//         transform: rotate(180deg);
//     }
// `;

// export const Overlay = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background-color: rgba(62, 133, 243, 0.05);
//     z-index: 100;
// `;

// export const ModalDiv = styled.div`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// `;