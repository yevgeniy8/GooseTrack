// import moment from 'moment';

// import sprite from 'images/icons.svg';

// import {
//     Date,
//     DateBox,
//     PeriodTypeSelect,
//     Icon,
//     BtnRight,
//     BtnLeft,
// } from './DatePicker.styled';
// import {
//     DatePickerStyled,
//     DatePickerWrapp,
// } from 'components/UserForm/ReactDatePickerCalendar.styled';

// const DatePickerValue = ({
//     currentDate,
//     setCurrentDate,
//     format,
//     setFormat,
// }) => {
//     // const month = moment(currentDate).format('YYYY-MM');
//     // const day = moment(currentDate).format('YYYY-MM-DD');

//     const handlePrevDate = format => {
//         const date = moment(currentDate)
//             .subtract(1, format)
//             .format('YYYY-MM-DD');
//         setCurrentDate(date);
//         localStorage.setItem('date', date);
//     };

//     const handleNextDate = format => {
//         const date = moment(currentDate).add(1, format).format('YYYY-MM-DD');
//         setCurrentDate(date);
//         localStorage.setItem('date', date);
//     };

//     // const handleChangePeriod = evt => {
//     //     switch (evt.currentTarget.textContent) {
//     //         case 'Month':
//     //             setFormat('month');
//     //             localStorage.setItem('type', 'month');
//     //             break;
//     //         case 'Day':
//     //             setFormat('day');
//     //             localStorage.setItem('type', 'day');
//     //             break;
//     //         default:
//     //             return format;
//     //     }
//     // };

//     return (
//         // <PeriodTypeSelect>
//         //     <DateBox>
//         //         <Date>
//         //             {moment(currentDate).format(
//         //                 format === 'day' ? 'DD MMM YYYY' : 'MMMM YYYY'
//         //             )}
//         //         </Date>
//         //     </DateBox>
//         //     <div>
//         //         <BtnLeft type="button" onClick={() => handlePrevDate(format)}>
//         //             <Icon width="18" height="18">
//         //                 <use href={`${sprite}#chevron-left`} />
//         //             </Icon>
//         //         </BtnLeft>
//         //         <BtnRight type="button" onClick={() => handleNextDate(format)}>
//         //             <Icon width="18" height="18">
//         //                 <use href={`${sprite}#chevron-right`} />
//         //             </Icon>
//         //         </BtnRight>
//         //     </div>
//         // </PeriodTypeSelect>

//         <DatePickerWrapp>
//             <DatePickerStyled
//                 name="birthday"
//                 selected={new Date()}
//                 dateFormat="yyyy/MM/dd"
//                 maxDate={new Date()}
//                 locale="en"
//                 // className={"input-valid"}
//                 // className={
//                 //     errors.birthday && touched.birthday
//                 //         ? 'input-error'
//                 //         : touched.birthday
//                 //         ? 'input-valid'
//                 //         : ''
//                 // }
//                 formatWeekDay={nameOfDay => nameOfDay.charAt(0)}
//                 showYearDropdown
//                 yearDropdownItemNumber={30}
//                 scrollableYearDropdown
//                 // onChange={date => {
//                 //     setFieldValue('birthday', date);
//                 // }}
//                 // onBlur={() => {
//                 //     setFieldTouched('birthday', true);
//                 // }}
//             />
//         </DatePickerWrapp>
//     );
// };

// export default DatePickerValue;
