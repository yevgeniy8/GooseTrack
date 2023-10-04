// import { useDispatch, useSelector } from 'react-redux';
// import { selectCalendar } from 'redux/tasks/tasksSelector';
// import { setCurrentDate } from 'redux/tasks/calendarSlice';
// import { BtnLeft, BtnRight, BtnPeriod, Svg, Paginator } from "./CalendarToolbar.styled";

// import sprite from 'images/icons.svg';
// import { getMonthYear, nextMonth, prevMonth } from "../ChoosedMonth/utils";
// import { useState } from "react";

// const PeriodPaginator = () => {
//     const [currentDate, setCurrentDate] = useState(new Date(2023, 9, 1));
// const dispatch = useDispatch();
// const currentDate = useSelector(selectCalendar);    

//     const handlePrevMonth = () => prevMonth(currentDate, setCurrentDate);

//     const handleNextMonth = () => nextMonth(currentDate, setCurrentDate);    

//     return ( 
//         <Paginator>
//             <BtnPeriod type="button">{getMonthYear(currentDate)}</BtnPeriod>
//             <div>
//                 <BtnLeft type="button" onClick={handlePrevMonth}>
                    
//                 <Svg width="18" height="18">
//                     <use href={`${sprite}#chevron-left`} />
//                 </Svg>
//             </BtnLeft>
//             <BtnRight type="button" onClick={handleNextMonth}>
//                 <Svg width="18" height="18">
//                     <use href={`${sprite}#chevron-right`} />
//                 </Svg>
//             </BtnRight>
//             </div>
//         </Paginator>
//      );
// }
 
// export default PeriodPaginator;

// <DateControls>
//         <button
//           onClick={() => prevMonth(currentDate, setCurrentDate)}
//           name="arrow-back-circle-outline"
//         ></button>
//         <button
//           onClick={() => nextMonth(currentDate, setCurrentDate)}
//           name="arrow-forward-circle-outline"
//         ></button>
//       </DateControls>