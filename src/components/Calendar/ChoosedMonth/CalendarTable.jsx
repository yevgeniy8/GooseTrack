import { useState } from 'react';

import {
    datesAreOnSameDay,
    getDaysInMonth,
    getSortedDays,
    // getMonthYear,
    // nextMonth,
    // prevMonth,
} from './utils';
import { Table } from './ChoosedMonth.styled';

const CalendarTable = () => {
    
    const [currentDate] = useState(new Date());

    return (
        <>
            <Table
                fullheight={true}
                is28Days={getDaysInMonth(currentDate) === 28}
            >
                {getSortedDays(currentDate).map((day, index) => (
                    <div
                        key={index}
                        id={`${currentDate.getFullYear()}-${
                            currentDate.getMonth() + 1
                        }-${day}`}
                    >
                        <span
                            className={`nonDRAG ${
                                datesAreOnSameDay(
                                    new Date(),
                                    new Date(
                                        currentDate.getFullYear(),
                                        currentDate.getMonth(),
                                        day
                                    )
                                )
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            {day}
                        </span>
                    </div>
                ))}
            </Table>
        </>
    );
};

export default CalendarTable;
