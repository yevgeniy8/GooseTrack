import styled from '@emotion/styled';
import { tablet, desktop, min } from '../../styles/media';

export const ReviewsSliderSection = styled.section`
    text-align: center;

    max-width: 375px;
    margin: 0 auto;

    margin-top: 64px;
    margin-bottom: 64px;

    ${min(tablet)} {
        max-width: 704px;

        margin-bottom: 100px;
    }

    ${min(desktop)} {
        max-width: 1184px;

        margin-top: 100px;
        margin-bottom: 118px;
    }
`;

export const ReviewTitle = styled.h2`
    color: ${({ theme }) => theme.colors.brand};

    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.14;
    text-transform: uppercase;

    ${min(tablet)} {
        font-size: 40px;
        line-height: 44px;
    }
`;

export const ReviewsCardsContainer = styled.div`
    max-width: 335px;

    margin: auto;

    margin-top: 40px;
    margin-bottom: 8px;

    ${min(tablet)} {
        max-width: 580px;

        margin-top: 50px;
        margin-bottom: 18px;
    }

    ${min(desktop)} {
        max-width: 1184px;

        margin-bottom: 32px;
    }
`;

export const CardContainerOne = styled.div`
    max-width: 335px;
    min-height: 194px;

    background-color: ${({ theme }) => theme.colors.white};

    border-radius: 8px;
    border: 1px solid rgba(17, 17, 17, 0.1);

    padding: 24px;

    ${min(tablet)} {
        max-width: 580px;
        padding: 32px;

        min-height: 187px;
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
    line-height: 1;

    margin-bottom: 13px;
`;

export const ReviewText = styled.p`
    color: rgba(17, 17, 17, 0.7);

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.28;
    text-align: justify;

    ${min(tablet)} {
        margin-left: 69px;
    }
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50px;
`;

export const ContainerDefaultAvatar = styled.div`
    width: 50px;
    height: 50px;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.brand};
    background: #f8f8f8;
    /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
        0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    padding: 12px;
`;

export const DefaultAvatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const ButtonLeft = styled.button`
    background-color: transparent;
    padding: 0;
    border: none;
`;
export const ButtonRigth = styled.button`
    background-color: transparent;
    padding: 0;
    border: none;

    margin-left: 24px;
`;

export const Span = styled.span`
    transform: rotate(180deg);
`;

export const SVG = styled.svg`
    width: 50px;
    height: 50px;

    ${min(tablet)} {
        width: 61px;
        height: 61px;
    }
`;
