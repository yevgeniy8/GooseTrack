import { selectUser } from 'redux/auth/authSelectors';
import {
    DatePickWrapper,
    DatePickerStyled,
} from './ReactDatePickerCalendar.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const ReactDatepicker = props => {
    const { birthday } = useSelector(selectUser);
    const [currentBirthday, setCurrentBirthday] = useState(new Date(birthday));
    return (
        <DatePickWrapper>
            <DatePickerStyled
                selected={currentBirthday}
                onChange={date => setCurrentBirthday(date)}
                value={currentBirthday}
                
            />
        </DatePickWrapper>
    );
};
