import { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';
import { BtnLeft, BtnRight, Icon, PeriodTypeSelect } from './DatePicker.styled';
import sprite from 'images/icons.svg';

const TempDatePicker = ({ startDate, setStartDate }) => {
    // const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <CustomDatePicker
            className="example-custom-input"
            onClick={onClick}
            ref={ref}
        >
            {value}
        </CustomDatePicker>
    ));

    const handleDateChange = date => {
        setStartDate(date);
    };
    return (
        <PeriodTypeSelect>
            <DatePickerWrapp>
                <ReactDatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                    dateFormat="dd MMMM yyyy"
                    formatWeekDay={nameOfDay => nameOfDay.charAt(0)}
                />
            </DatePickerWrapp>
            <div>
                <BtnLeft
                    type="button"
                    onClick={() =>
                        handleDateChange(
                            new Date(startDate.getTime() - 24 * 60 * 60 * 1000)
                        )
                    }
                >
                    <Icon width="18" height="18">
                        <use href={`${sprite}#chevron-left`} />
                    </Icon>
                </BtnLeft>
                <BtnRight
                    type="button"
                    onClick={() =>
                        handleDateChange(
                            new Date(startDate.getTime() + 24 * 60 * 60 * 1000)
                        )
                    }
                >
                    <Icon width="18" height="18">
                        <use href={`${sprite}#chevron-right`} />
                    </Icon>
                </BtnRight>
            </div>
        </PeriodTypeSelect>
    );
};
export default TempDatePicker;

const CustomDatePicker = styled.button`
    width: 171px;
    display: flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    background: #3e85f3;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    text-transform: uppercase;
`;
export const DatePickerWrapp = styled.div`
    .react-datepicker-wrapper {
        display: block;
    }
    .react-datepicker {
        position: absolute;
        top: 8px;
        left: 0px;
        width: 235px;
        height: 280px;
        background-color: #3e85f3;
        border-radius: 8px;
        color: #fff;
        overflow: hidden;
        border: none;
        display: flex;
        justify-content: center;
        font-size: 18px;
        line-height: 1.3;

        &__header {
            background-color: #3e85f3;
            color: #fff;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        &__month-container {
            background-color: #3e85f3;
            width: 235px;
            height: 280px;

            /* padding: 0 15px 18px 15px ; */
        }

        &__current-month {
            font-size: 24px;
            text-align: center;
            font-family: Inter;
            font-weight: 600;
            line-height: 1.666;
        }
        &__day-names {
            margin: 0;
        }

        &__day {
            color: #fff;
            width: 26px;
            height: 27px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Inter;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: -0.28px;
            /* @media (min-width: 768px) {
                font-size: 18px;
            } */
            &:hover {
                border-radius: 50%;
                background-color: #fff;
                color: #3e85f3;
                opacity: 0.7;
            }
            &--weekend {
                /* opacity: 40%; */
            }

            &--selected {
                border-radius: 50%;
                opacity: 1;
                outline: none;

                padding: 12px 14px;
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

        &__navigation {
            margin-top: 12px;
        }
        &__day-name {
            color: rgba(255, 255, 255, 0.5);
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.28px;
            width: 26px;
        }

        &__day--outside-month {
            color: rgba(255, 255, 255, 0.2);
        }

        &__current-month {
            color: #fff;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: -0.32px;
            margin-top: 10px;
            margin-bottom: 18px;
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
        }
        &__month {
            margin: 0;
            padding-left: 7px;
            padding-top: 7px;
        }
    }
`;
