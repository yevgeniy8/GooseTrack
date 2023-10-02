import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from '@emotion/styled';

export const DatePickerStyled = styled(DatePicker)`
     width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.6);

    outline: none;
    font-family: Inter;

    line-height: 1.28;

    &:hover,
    &:focus {
        border: 1px solid #111;
    }

    ::placeholder {
        color: #111;
        font-weight: 600;
        font-size: 14px;
    }
    @media (min-width: 768px) {
        padding: 14px;
        ::placeholder {
            color: #111;
            font-weight: 600;
            font-size: 16px;
        }
    }
`
export const DatePickWrapper=styled.div`
&__month-container{
    border-radius: 16px;
    background-color: #3E85F3;
}
    
`