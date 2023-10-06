import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import CalendarToolbar from 'components/Calendar/CalendarToolbar/CalendarToolbar';
// import ChoosedMonth from 'components/Calendar/ChoosedMonth/ChoosedMonth';
// import ChoosedDay from 'components/Calendar/ChoosedDay/ChoosedDay';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

const CalendarPage = () => {
    // const { currentDay } = useParams();

    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        // console.log(location);
        if (location.pathname === '/calendar') {
            navigate('/calendar/month/:currentDate');
            // navigate('/account');
        }
    });

    return (
        <CalendarContainer>
            {/* <H2>Calendar</H2> */}
            <CalendarToolbar />
            {/* <ChoosedMonth />
            {currentDay ? <ChoosedDay /> : null} */}
            <Outlet />
        </CalendarContainer>
    );
};

const CalendarContainer = styled.div`
    padding: 0 32px 32px;
    background-color: #f7f6f9;
    max-width: 1085px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 45px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-top: 0;
    }
`;
// const H2 = styled.h2`
//   font-family: Inter;
//   font-size: 32px;
//   font-weight: 700;
//   line-height: 32px;
//   letter-spacing: 0em;
//   text-align: left;
//   margin-bottom: 38px;
//   box-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04);
//   box-shadow: 0px 47px 355px 0px rgba(0, 0, 0, 0.07);
// `;

export default CalendarPage;

// import React from 'react';

// const CalendarPage = () => {
//     return <div>CalendarPage</div>;
// };

// export default CalendarPage;
