import styled from '@emotion/styled';

export const ReviewsSliderContainer = styled.div`
    text-align: center;

    max-width: 375px;
    margin: 0 auto;

    margin-top: 64px;
    margin-bottom: 64px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        max-width: 704px;

        margin-bottom: 100px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        max-width: 1184px;

        margin-top: 100px;
        margin-bottom: 118px;
    }
`;

export const ReviewTitle = styled.h2`
    color: #3e85f3;

    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 114.286% */
    text-transform: uppercase;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: 40px;
        line-height: 44px; /* 110% */
    }

    /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        font-family: Inter;
        font-size: 40px;
        line-height: 44px;
    } */
`;

export const CardsContainer = styled.div`
    /* text-align: center; */
    width: 335px;

    margin: auto;

    margin-top: 40px;
    margin-bottom: 8px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 580px;

        margin-top: 50px;
        margin-bottom: 18px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        width: 1184px;

        margin-bottom: 32px;
    }
`;

export const CardContainer = styled.div`
    height: 200px;

    background-color: #ffffff;

    border-radius: 8px;
    border: 1px solid rgba(17, 17, 17, 0.1);

    padding: 24px 20px 24px 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 580px;
        padding: 32px 32px 50px 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        padding: 32px 32px 50px 32px;
    }
`;

export const FlexContainerTwo = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FlexContainerOne = styled.div`
    display: flex;
    align-items: start;
    justify-content: flex-start;
    text-align: start;
    gap: 18px;
`;

export const Name = styled.h3`
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

    text-align: start;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-left: 69px;
    }
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
`;
export const ButtonRigth = styled.button`
    background-color: transparent;
    padding: 0;
    border: none;
    cursor: pointer;

    margin-left: 24px;
`;

export const Span = styled.span`
    transform: rotate(180deg);
`;

export const SVG = styled.svg`
    width: 50px;
    height: 50px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 61px;
        height: 61px;
    }
`;

export const ArrowContainer = styled.div`
    margin-left: 0;
`;

export const ContainerDefaultAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    border: 2px solid #3e85f3;
    background: #f8f8f8;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
        0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    padding: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;
`;

export const DefaultAvatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
