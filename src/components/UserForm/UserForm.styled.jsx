import styled from '@emotion/styled';
import { Form } from 'formik';
import { Field, ErrorMessage } from 'formik';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 299px;
    padding-top: 59px;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 40px;
    border-radius: 16px;
    background-color: #fff;
    @media (min-width: 768px) {
        max-width: 704px;
    }
`;

export const AvatarContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`;

export const ImgAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    width: 72px;
    height: 76px;
    object-fit: cover;
    object-position: 50% 50%;
    margin-bottom: 18px;
`;

export const InputFile = styled.input`
    position: absolute;
    top: 50px;
    left: 137px;
    width: 20px;
    opacity: 0;
`;

export const SvgPlus = styled.svg`
    stroke: white;
    fill: #3e85f3;
    position: absolute;
    top: 60px;
    left: 136px;
    cursor: pointer;
`;

export const UserName = styled.h2`
    color: #343434;
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
`;

export const UserP = styled.p`
    color: #343434;
    font-size: 12px;
    font-weight: 600;
    font-family: Inter;
    line-height: 1.1666;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (min-width: 768px) {
        max-width: 354px;
    }
`;
export const Wrapper = styled.div`
    width: 299px;
    @media (min-width: 768px) {
        max-width: 354px;
    }
    @media (min-width: 1140px) {
    }
`;

export const Label = styled.label`
    position: relative;
`;

export const Span = styled.span`
    display: block;
    color: #111;
    font-family: Inter;
    font-size: 12px;
    line-height: 1.166;
    margin-bottom: 8px;
`;

export const LabelWrap=styled.div`
    width:100%;
`

export const InputForm = styled(Field)`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.6);

    color: #111;
    outline: none;
    font-family: Inter;
    margin-bottom: 18px;

    font-size: 14px;
    line-height: 18px;

    &:hover,
    &:focus {
        border: 1px solid #111;
    }

    ::placeholder {
        color: #111111;
        font-weight: 600;
    }
`;

export const Button = styled.button`
    margin-top: 30px;
    width: 195px;
    padding: 14px 50px;
    align-self: center;
    border: none;
    outline: none;

    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.333;
    letter-spacing: -0.36px;
`;

export const Error = styled(ErrorMessage)`
    position: absolute;
    bottom: -28px;
    left: 0;

    color: #da1414;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
`;
