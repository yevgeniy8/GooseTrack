import styled from '@emotion/styled';
export const PlusIcon = styled.svg`
    width: 100%;
    height: 100%;

    stroke: ${({ theme }) => theme.colors.textTitleHeader};
`;
export const TopBtn = styled.button`
    display: flex;

    width: 24px;
    height: 24px;
    padding: 0px;

    border: none;
    background: transparent;
    align-items: center;
    cursor: pointer;

    stroke: ${({ theme }) => theme.colors.textTitleHeader};
`;
export const BtnToAdd = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.28;
    border-radius: 8px;
    border: 1px dashed #3e85f3;

    margin-top: 10px;
    padding: 0px;

    height: 48px;
    width: 100%;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    background: ${({ theme }) => theme.colors.backgroundSideBarCurrentPage};
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover {
        background: ${({ theme }) => theme.colors.buttonAddTaskHover};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 4px #3e85f3;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.disabledBtn};
        color: ${({ theme }) => theme.colors.white};
        cursor: not-allowed;
<<<<<<< HEAD
=======

        ${min(mobile)} {
            height: 48px;
        }
        ${min(tablet)} {
            height: 52px;
        }

        ${min(desktop)} {
            height: 52px;
        }
>>>>>>> parent of 7ad62ac (Update AddBtns.styled.js)
    }
`;
export const IconX = styled.svg`
    width: 24px;
    height: 24px;

    margin-right: 8px;

    stroke: ${({ theme }) => theme.colors.textTitleHeader};
`;
