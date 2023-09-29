import styled from '@emotion/styled';

export const Container = styled.div`
    width: 1185px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 0 auto;
`;

export const Li = styled.li`
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 228px;

    /* :nth-child(2n) {
        flex-direction: row-reverse;
    } */

    :nth-of-type(2n) {
        flex-direction: row-reverse;
    }
`;
export const H1 = styled.h1`
    margin-bottom: 20px;

    color: #3e85f3;
    font-family: Inter;
    font-size: 104px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 104px */
    letter-spacing: -4px;
`;

export const H2 = styled.h2`
    margin-bottom: 8px;

    width: 264px;
    /* float: left; */
    padding: 6px 18px;
    border-radius: 44px;
    background: #dcebf7;
    color: #3e85f3;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 110% */
    text-transform: uppercase;
`;

export const H2All = styled(H2)`
    width: 169px;
`;

export const P = styled.p`
    margin-bottom: 24px;

    color: #171820;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 110% */
    text-transform: uppercase;
`;

export const TextDescription = styled.p`
    width: 275px;
    color: rgba(17, 17, 17, 0.9);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
`;
