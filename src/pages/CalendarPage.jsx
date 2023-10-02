
import React from "react"; 
import styled from '@emotion/styled';
import CalendarToolbar from "components/Calendar/CalendarToolbar/CalendarToolbar";
import ChoosedMonth from "components/Calendar/ChoosedMonth/ChoosedMonth";

const CalendarPage = () => {
    return ( 
        <CalendarContainer>
            <H2>Calendar</H2>
        <CalendarToolbar/>
            <ChoosedMonth/>
        </CalendarContainer> 
     );
}

const CalendarContainer = styled.div`
    padding: 32px;
    background-color: #F7F6F9;
    `;
const H2 = styled.h2`
    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 38px;
    box-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04);
    box-shadow: 0px 47px 355px 0px rgba(0, 0, 0, 0.07);
`

export default CalendarPage;

// import React from 'react';

// const CalendarPage = () => {
//     return <div>CalendarPage</div>;
// };

// export default CalendarPage;
