import { Formik } from "formik";
// import * as Yup from 'yup';

import close from "../../../images/icons.svg";

import {
  ButtonAction,
  ButtonCancel,
  ButtonCloseWrap,
  ButtonWrapper,
  ErrorMessage,
  Form,
  InputTime,
  InputTitle,
  Label,
  RadioField,
  RadioLabel,
  RadioSpan,
  RadioWrapper,
  TimeWrapper,
} from "./TaskForm.styled";


// const TaskSchema = Yup.object().shape({
//     title: Yup.string()
//         .max(250, 'Title is too long')
//         .required('Title is required'),
//     start: Yup.string().required('Start time is required'),
//     end: Yup.string()
//         .required('End time is required')
//         .test(
//             'is-greater',
//             'End time should be greater than start time',
//             function (value) {
//                 const { start } = this.parent;
//                 if (start && value) {
//                     const startTime = new Date(`2000-01-01T${start}`);
//                     const endTime = new Date(`2000-01-01T${value}`);
//                     return endTime > startTime;
//                 }
//                 return true;
//             }
//         ),
//     priority: Yup.string()
//         .oneOf(['low', 'medium', 'high'])
//         .required('Priority is required'),
//     date: Yup.date()
//         .required('Date is required')
//         .transform((value, originalValue) => {
//             if (originalValue) {
//                 const [year, month, day] = originalValue.split('-');
//                 return new Date(
//                     `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
//                 );
//             }
//             return value;
//         }),
//     category: Yup.string()
//         .oneOf(['to-do', 'in-progress', 'done'])
//         .required('Category is required'),
// });



export const TaskForm = ({ onClose, action }) => {
  

 
  return (
      <Formik
          // initialValues=
          // {{
              // title: (action === 'edit' && title) || '',
              // start: (action === 'edit' && start) || '09:00',
              // end: (action === 'edit' && end) || '10:00',
              // priority: (action === 'edit' && priority) || 'low',
      // }}
      // validationSchema={TaskSchema}
      >
          <Form>
              <Label>
                  Title
                  <InputTitle
                      type="text"
                      name="title"
                      placeholder="Enter text"
                  />
                  <ErrorMessage name="title" component="div" />
              </Label>

              <TimeWrapper>
                  <Label>
                      Start
                      <InputTime type="time" name="start" />
                      <ErrorMessage name="start" component="div" />
                  </Label>
                  <Label>
                      End
                      <InputTime type="time" name="end" />
                      <ErrorMessage name="end" component="div" />
                  </Label>
              </TimeWrapper>

              <RadioWrapper role="group" aria-labelledby="my-radio-group">
                  <RadioLabel>
                      <RadioField type="radio" name="priority" value="low" />
                      <RadioSpan value="low" />
                      Low
                  </RadioLabel>
                  <RadioLabel>
                      <RadioField type="radio" name="priority" value="medium" />
                      <RadioSpan value="medium" />
                      Medium
                  </RadioLabel>
                  <RadioLabel>
                      <RadioField type="radio" name="priority" value="high" />
                      <RadioSpan value="high" />
                      High
                  </RadioLabel>
              </RadioWrapper>

              <ButtonWrapper>
                  <ButtonAction type="submit">
                      {action === 'edit' ? 'Edit' : 'Add'}
                  </ButtonAction>
                  <ButtonCancel type="button" onClick={onClose}>
                      Cancel
                  </ButtonCancel>
              </ButtonWrapper>

              <ButtonCloseWrap
                  type="button"
                  aria-label="close button"
                  onClick={onClose}
              >
                  <svg width="24" height="24">
                      <use href={`${close}#x-close`} />
                  </svg>
              </ButtonCloseWrap>
          </Form>
      </Formik>
  );
};
