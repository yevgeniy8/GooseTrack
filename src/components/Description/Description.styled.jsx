import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 375px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        max-width: 704px;
        padding-left: 32px;
        padding-right: 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        max-width: 1208px;
        /* width: 1185px; */
        padding-left: 12px;
        padding-right: 12px;
    }
`;

export const Li = styled.li`
    margin-top: 64px;
    display: flex;
    flex-direction: column;

    gap: 40px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        gap: 48px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        margin-top: 64px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 228px;

        :nth-of-type(2n) {
            flex-direction: row-reverse;
        }
    }
`;
export const SideDiv = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-left: auto;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        margin-left: 0;
    }
`;
export const H1 = styled.h1`
    margin-bottom: 14px;

    color: ${({ theme }) => theme.colors.brand};
    font-size: 104px;
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.b};
    line-height: 100%; /* 104px */
    letter-spacing: -4px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-bottom: 20px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        font-size: 104px;
    }
`;

export const H2 = styled.h2`
    margin-bottom: 8px;
    width: 264px;
    /* float: left; */
    padding: 8px 18px;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.brand};
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.b};
    line-height: calc(40 / 32);
    text-transform: uppercase;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        padding: 6px 18px;
        font-size: ${({ theme }) => theme.fontSizes.xxxxl};
        line-height: calc(44 / 40);
    }
`;

export const H2All = styled(H2)`
    padding: 8px 18px;
    width: 139px;
    text-transform: uppercase;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 169px;
        padding: 6px 18px;
        font-size: ${({ theme }) => theme.fontSizes.xxxxl};
        font-style: normal;
        font-weight: ${({ theme }) => theme.fontWeight.b};
        line-height: calc(44 / 40);
    }
`;

export const P = styled.p`
    margin-bottom: 14px;

    color: #171820;
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.b};
    line-height: calc(40 / 32);
    text-transform: uppercase;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        text-shadow: ${({ theme }) => theme.shadows.text};
        margin-bottom: 24px;
        font-size: ${({ theme }) => theme.fontSizes.xxxxl};
        line-height: calc(44 / 40);
    }
`;

export const TextDescription = styled.p`
    width: 335px;
    color: rgba(17, 17, 17, 0.9);
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.m};
    line-height: calc(18 / 14);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 275px;
    }
`;

export const Img = styled.img`
    width: 335px;
    height: 457px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 704px;
        height: 700px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        width: 604px;
        height: 700px;
    }
`;
