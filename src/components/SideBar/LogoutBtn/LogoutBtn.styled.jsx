import styled from '@emotion/styled';

export const ButtonLogout = styled.button`
    width: 141px;
    height: 56px;
    padding: 16px 23px;
    border: none;
    border-radius: 16px;
    color: #ffffff;
    font-size: 18px;
    line-height: 1.33;
    cursor: pointer;
    background-color: #3e85f3;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    &:hover,
    &:focus {
        background-color: #2b78ef;
    }
`;
