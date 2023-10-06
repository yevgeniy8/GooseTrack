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
`;
export const DatePickWrapper = styled.div`
    .react-datepicker-wrapper {
        display: block;
    }
    .react-datepicker {
        position: absolute;
        top: 34px;
        left: 27px;

        @media (min-width: 768px) {
            top: -60px;
            left: 110px;
        }
        background-color: #3e85f3;
        border-radius: 16px;
        color: #fff;
        overflow: hidden;
        border: none;
        width: 327px;
        height: 318px;
        display: flex;
        justify-content: center;
        font-size: 18px;
        line-height: 1.3;

        @media (min-width: 768px) {
            width: 373px;
            height: 354px;
            font-size: 22px;
            line-height: 1.3;
        }

        &__header {
            background-color: #3e85f3;
            color: #fff;
            border-bottom:1px solid rgba(255, 255, 255, 0.20);
        }
        &__month-container {
            background-color: #3e85f3;
        }

        &__current-month {
            font-size: 24px;
            text-align: center;
            font-family: Inter;
            font-weight: 600;
            line-height: 1.666;
        }
        &__day {
            color: #fff;
            width: 40px;
            height: 40px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            @media (min-width: 768px) {
                font-size: 18px;
            }
            &:hover {
                border-radius: 50%;
                background-color: #fff;
                color: #3e85f3;
                opacity: 0.7;
            }
            &--weekend {
                opacity: 40%;
            }

            &--selected {
                border-radius: 50%;
                opacity: 1;
                outline: none;

                padding: 12px 15px;
                text-align: center;
                background-color: white;
                color: #3e85f3;
            }
            &--keyboard-selected {
                border-radius: 50%;
                opacity: 1;
                outline: none;
            }
        }
        &__day-name {
            color: #fff;
            width: 40px;
        }
        &__current-month {
            color: #fff;
        }

        &__navigation--years {
            background-color: #fff;
            border-radius: 50%;
            width: 15px;
            height: 15px;
            margin: 5px auto;
            &:hover {
                background-color: #3e85f3;
                border: 1px solid #fff;
            }
        }
        &__year-option {
            background-color: #3e85f3;
            color: #fff;
            &:hover {
                background-color: #3e85f3;
                font-size: 14px;
                font-weight: 700;
            }
        }
        &__year-dropdown {
            &::-webkit-scrollbar {
                width: 15px;
                height: 20px;
                background: #3e85f3;
                border-radius: 8px;
            }
            &::-webkit-scrollbar-thumb {
                background: #fff;
                border-radius: 8px;
            }
        }
        &__week {
            
            display: flex;
        };
        &__month{
            margin:0;
            padding-bottom:9px;
        }
    }
`;
