import styled from '@emotion/styled';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.span`
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5;
    @media (min-width: 768px) {
        color: #3e85f3;
        text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
            0px 47px 355px rgba(0, 0, 0, 0.07);
        font-family: Inter;
        font-size: 200px;
        font-weight: 700;
        line-height: 1.25;
    }
`;

export const Info = styled.p`
    color: rgba(17, 17, 17, 0.7);
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
    margin-bottom: 24px;
    @media (min-width: 768px) {
        color: rgba(17, 17, 17, 0.7);
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.28;
    };
    @media (min-width:1140px){
    max-width:387px;
}
`;

export const InfoContainer = styled.div`
max-width: 281px;
@media (min-width:768px){
    max-width:387px;
};
`;

export const BtnBack = styled.button`
    padding: 14px 32px;
    border-radius: 16px;
    background-color: #3e85f3;
    border: none;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;
