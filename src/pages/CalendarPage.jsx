import React from 'react';
import styled from '@emotion/styled';
import CalendarToolbar from 'components/Calendar/CalendarToolbar/CalendarToolbar';
import { Outlet } from 'react-router';

const CalendarPage = () => {
    return (
        <CalendarContainer>
            <CalendarToolbar />
            <Outlet />
        </CalendarContainer>
    );
};

export default CalendarPage;

const CalendarContainer = styled.div`
    //   background-color: #f7f6f9;
    //   max-width: 1085px;
    // margin-top: 45px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-top: 0;
    }
`;

// import React, { useEffect } from 'react';
// import styled from '@emotion/styled';
// import CalendarToolbar from 'components/Calendar/CalendarToolbar/CalendarToolbar';
// // import ChoosedMonth from 'components/Calendar/ChoosedMonth/ChoosedMonth';
// // import ChoosedDay from 'components/Calendar/ChoosedDay/ChoosedDay';
// import { useLocation, useNavigate, Outlet } from 'react-router-dom';

// const CalendarPage = () => {
//     // const { currentDay } = useParams();

//     const location = useLocation();

//     const navigate = useNavigate();

//     useEffect(() => {
//         // console.log(location);
//         if (location.pathname === '/calendar') {
//             navigate('/calendar/month/:currentDate');
//             // navigate('/account');
//         }
//     });

//     return (
//         <CalendarContainer>
//             <CalendarToolbar />
//             {/* <ChoosedMonth />
//             {currentDay ? <ChoosedDay /> : null} */}
//             <Outlet />
//         </CalendarContainer>
//     );
// };

// const CalendarContainer = styled.div`
//   padding: 0 32px 32px;
// //   background-color: #f7f6f9;
// //   max-width: 1085px;
//   margin-top: 45px;
//       @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
//         margin-top: 0;
//     }
// `;

// export default CalendarPage;
