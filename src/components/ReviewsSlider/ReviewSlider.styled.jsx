import styled from '@emotion/styled';

export const Container = styled.div`
    width: 1185px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 118px;
    text-align: center;
`;

export const ReviewTitle = styled.h2`
    color: #3e85f3;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    text-transform: uppercase;
`;

export const CardsContainer = styled.div`
    text-align: center;

    /* display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center; */

    margin-top: 50px;
    margin-bottom: 32px;

    width: 100%;
`;

export const CardContainer = styled.div`
    width: 580px;
    height: 200px;

    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid rgba(17, 17, 17, 0.1);

    display: flex;
    align-items: start;
    justify-content: flex-start;
    text-align: start;

    gap: 18px;

    padding: 32px;
`;

export const Name = styled.p`
    color: #343434;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;

    margin-bottom: 13px;
`;

export const ReviewText = styled.p`
    color: rgba(17, 17, 17, 0.7);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;

    width: 100%;
`;

export const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50px;
`;
export const ButtonLeft = styled.button`
    background-color: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    /* &:hover {
        background-color: #1f5aa6;
    } */
`;
export const ButtonRigth = styled.button`
    background-color: transparent;
    padding: 0;
    border: none;
    cursor: pointer;

    margin-left: 24px;

    transition: background-color 0.3s ease;

    /* &:hover {
        background-color: #1f5aa6;
    } */
`;
export const Span = styled.span`
    transform: rotate(180deg);
`;
