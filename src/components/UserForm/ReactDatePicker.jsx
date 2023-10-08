// import React from 'react';
// import { useFormikContext, useField } from 'formik';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { selectUser } from 'redux/auth/authSelectors';
// import {
//     DatePickWrapper,
//     DatePickerStyled,
// } from './ReactDatePickerCalendar.styled';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';


// const CustomDatePicker = ({ ...props }) => {
//   const { setFieldValue } = useFormikContext();
//   const [field] = useField(props);

//   return (
//     <DatePicker
//       {...field}
//       {...props}
//       selected={field.value}
//       onChange={(date) => setFieldValue(field.name, date)}
//     />
//   );
// };

// export default CustomDatePicker;



// export const ReactDatepicker = props => {
//     const { birthday } = useSelector(selectUser);
//     const [startDate, setStartDate] = useState(new Date(birthday));
//   console.log(props.value)
//     return (
//         <DatePickWrapper>
//             <DatePickerStyled
//                 selected={startDate}
//                 onChange={date => {setStartDate(new Date(date))}}
             
            
//             />
//         </DatePickWrapper>
//     );
// };
