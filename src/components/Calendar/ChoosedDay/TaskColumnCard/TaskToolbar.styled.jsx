import styled from '@emotion/styled';

export const Icon = styled.svg`
    width: 16px;
    height: 16px;
    stroke: ${({ theme }) => theme.colors.iconTasks};
`;

export const CardEditMenu = styled.ul`
    padding: 0px;
    gap: 10px;
    margin-left: auto;
    margin-right: 14px;
    margin-top: auto;
    display: flex;
    list-style: none;
`;

export const CardEditBtn = styled.button`
    padding: 0px;
    border: none;
    border-radius: 2px;
    display: flex;
    background-color: inherit;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
        /* outline: none;
        border: none; */
        svg {
            stroke: #3e85f3;
        }
    }

    &:focus {
        /* outline: none; */
        /* border: none; */
        /* box-shadow: 0 0 2px 2px #3e85f3; */
    }
`;
