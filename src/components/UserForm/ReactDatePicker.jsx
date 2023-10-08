import {
    DatePickWrapper,
    DatePickerStyled,
} from './ReactDatePickerCalendar.styled';

export const ReactDatepicker = (props) => {
    return (
        <DatePickWrapper>
            <DatePickerStyled

                {...props}
            />
        </DatePickWrapper>
    );
};
