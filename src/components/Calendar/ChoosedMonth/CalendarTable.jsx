import { useState } from "react";
import { datesAreOnSameDay, getDaysInMonth, getSortedDays } from "./utils";
import { Table } from './ChoosedMonth.styled';

const CalendarTable = () => {

    const [currentDate] = useState(new Date(2023, 9, 1));

    return ( 
        <Table
            fullheight={true}
            is28Days={getDaysInMonth(currentDate) === 28}
        >
            {getSortedDays(currentDate).map((day) => (
          <div
            key={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}
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
                  ? "active"
                  : ""
              }`}
            >
              {day}
            </span>
          </div>
        ))}
        </Table>
     );
}
 
export default CalendarTable;

