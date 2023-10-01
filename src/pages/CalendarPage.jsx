
import React from "react"; 
import styled from '@emotion/styled';
import CalendarToolbar from "components/Calendar/CalendarToolbar/CalendarToolbar";
import ChoosedMonth from "components/Calendar/ChoosedMonth/ChoosedMonth";

const CalendarPage = () => {
    return ( 
        <CalendarContainer>
            <h2>Calendar</h2>
        <CalendarToolbar/>
            <ChoosedMonth/>
        </CalendarContainer>
     );
}

const CalendarContainer = styled.div`
    padding: 32px;
    background-color: #F7F6F9;
    `

export default CalendarPage;

// import React from 'react';

// const CalendarPage = () => {
//     return <div>CalendarPage</div>;
// };

// export default CalendarPage;
