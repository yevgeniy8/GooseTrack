import styled from '@emotion/styled';

export const Container = styled.div`
    width: 1185px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
`;

export const ReviewTitle = styled.h2`
    color: #3e85f3;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 110% */
    text-transform: uppercase;
`;

export const CardsContainer = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Две колонки в гриде */
    gap: 20px;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
`;

export const CardContainer = styled.div`
    width: 580px;
    min-height: 105px;
    padding: 32px 32px 50px 32px;

    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid rgba(17, 17, 17, 0.1);

    margin-bottom: 20px;
    display: flex;
    align-items: start;

    gap: 10px;

    justify-content: flex-start;
    text-align: start;
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
    height: 50px;
    flex-shrink: 0;
    border-radius: 50px;
    max-width: 50px;
`;
