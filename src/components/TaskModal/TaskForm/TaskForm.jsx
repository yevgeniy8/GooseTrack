import { Formik } from 'formik';
import * as Yup from 'yup';

import close from '../../../images/icons.svg';

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
} from './TaskForm.styled';

import { addTask } from 'redux/calendar/calendarOperations';

import { useDispatch } from 'react-redux';

const TaskSchema = Yup.object().shape({
    title: Yup.string()
        .max(250, 'Title is too long')
        .required('Title is required'),
    start: Yup.string().required('Start time is required'),
    end: Yup.string()
        .required('End time is required')
        .test(
            'is-greater',
            'End time should be greater than start time',
            function (value) {
                const { start } = this.parent;
                if (start && value) {
                    const startTime = new Date(`2000-01-01T${start}`);
                    const endTime = new Date(`2000-01-01T${value}`);
                    return endTime > startTime;
                }
                return true;
            }
        ),
    priority: Yup.string()
        .oneOf(['low', 'medium', 'high'])
        .required('Priority is required'),
    date: Yup.date()
        .required('Date is required')
        .transform((value, originalValue) => {
            if (originalValue) {
                const [year, month, day] = originalValue.split('-');
                return new Date(
                    `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
                );
            }
            return value;
        }),
    category: Yup.string()
        .oneOf(['to-do', 'in-progress', 'done'])
        .required('Category is required'),
});

export const TaskForm = ({ onClose, action }) => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        console.log(values);

        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString();
        // console.log(dateString.split('.').reverse().join('-'));

        const obj = {
            ...values,
            category: 'to-do',
            date: dateString.split('.').reverse().join('-'),
        };
        console.log(obj);
        dispatch(addTask(obj));
        onClose();
    };

    return (
        <Formik
            // initialValues=
            // {{
            // title: (action === 'edit' && title) || '',
            // start: (action === 'edit' && start) || '09:00',
            // end: (action === 'edit' && end) || '10:00',
            // priority: (action === 'edit' && priority) || 'low',
            // }}
            validationSchema={TaskSchema}
            initialValues={{
                // name: ['low', 'medium', 'high'],
                title: '',
                start: '',
                end: '',
            }}
            onSubmit={handleSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <Form>
                    <Label>
                        Title
                        <InputTitle
                            type="text"
                            name="title"
                            placeholder="Enter text"
                            value={values.title}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <ErrorMessage name="title" component="div" />
                    </Label>

                    <TimeWrapper>
                        <Label>
                            Start
                            <InputTime
                                type="time"
                                name="start"
                                value={values.start}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="start" component="div" />
                        </Label>
                        <Label>
                            End
                            <InputTime
                                type="time"
                                name="end"
                                value={values.end}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="end" component="div" />
                        </Label>
                    </TimeWrapper>

                    <RadioWrapper role="group" aria-labelledby="my-radio-group">
                        <RadioLabel>
                            <RadioField
                                type="radio"
                                name="priority"
                                value="low"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <RadioSpan value="low" />
                            Low
                        </RadioLabel>
                        <RadioLabel>
                            <RadioField
                                type="radio"
                                name="priority"
                                value="medium"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <RadioSpan value="medium" />
                            Medium
                        </RadioLabel>
                        <RadioLabel>
                            <RadioField
                                type="radio"
                                name="priority"
                                value="high"
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <RadioSpan value="high" />
                            High
                        </RadioLabel>
                    </RadioWrapper>

                    {/* <button type="submit">Ok</button> */}

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
            )}
        </Formik>
    );
};

// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { useParams } from 'react-router-dom';

// import close from '../../../images/icons.svg';

// import {
//     ButtonAction,
//     ButtonCancel,
//     ButtonCloseWrap,
//     ButtonWrapper,
//     ErrorMessage,
//     Form,
//     InputTime,
//     InputTitle,
//     Label,
//     RadioField,
//     RadioLabel,
//     RadioSpan,
//     RadioWrapper,
//     TimeWrapper,
// } from './TaskForm.styled';

// import { addTask, editTask } from 'redux/calendar/calendarOperations';

// import { useDispatch } from 'react-redux';

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

// export const TaskForm = ({ onClose, action, initialData, column }) => {
//     console.log('action:', action);
//     console.log('initialData:', initialData);
//     console.log('column:', column);
//     const { id, title, start, end, priority, date } = initialData || '';

//     const dispatch = useDispatch();
//     const { currentDay } = useParams();
//     console.log(currentDay);

//     const handleSubmit = (values, actions) => {
//         if (action === 'add') {
//             dispatch(addTask(values));
//         }

//         if (action === 'edit') {
//             dispatch(editTask({ id, ...values }));
//         }

//         actions.resetForm();
//         onClose();
//     };

//     const setCategory = () => {
//         if (column === 'To do') return 'to-do';
//         if (column === 'In Progress') return 'in-progress';
//         if (column === 'Done') return 'done';
//     };

//     // const handleSubmit = (values, actions) => {
//     //     // console.log(values);

//     //     const currentDate = new Date();
//     //     const dateString = currentDate.toLocaleDateString();
//     //     // console.log(dateString.split('.').reverse().join('-'));

//     //     const obj = {
//     //         ...values,
//     //         category: 'to-do',
//     //         date: dateString.split('.').reverse().join('-'),
//     //     };
//     //     console.log(obj);
//     //     dispatch(addTask(obj));
//     //     onClose();
//     // };

//     return (
//         <Formik
//             initialValues={{
//                 title: (action === 'edit' && title) || '',
//                 start: (action === 'edit' && start) || '09:00',
//                 end: (action === 'edit' && end) || '10:00',
//                 priority: (action === 'edit' && priority) || 'low',
//                 date: date ? date : currentDay,
//                 category: setCategory(),
//             }}
//             validationSchema={TaskSchema}
//             // initialValues={{
//             //     // name: ['low', 'medium', 'high'],
//             //     title: '',
//             //     start: '',
//             //     end: '',
//             // }}
//             onSubmit={handleSubmit}
//         >
//             {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
//                 /* and other goodies */
//             }) => (
//                 <Form>
//                     <Label>
//                         Title
//                         <InputTitle
//                             type="text"
//                             name="title"
//                             placeholder="Enter text"
//                             value={values.title}
//                             onBlur={handleBlur}
//                             onChange={handleChange}
//                         />
//                         <ErrorMessage name="title" component="div" />
//                     </Label>

//                     <TimeWrapper>
//                         <Label>
//                             Start
//                             <InputTime
//                                 type="time"
//                                 name="start"
//                                 value={values.start}
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                             />
//                             <ErrorMessage name="start" component="div" />
//                         </Label>
//                         <Label>
//                             End
//                             <InputTime
//                                 type="time"
//                                 name="end"
//                                 value={values.end}
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                             />
//                             <ErrorMessage name="end" component="div" />
//                         </Label>
//                     </TimeWrapper>

//                     <RadioWrapper role="group" aria-labelledby="my-radio-group">
//                         <RadioLabel>
//                             <RadioField
//                                 type="radio"
//                                 name="priority"
//                                 value="low"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                             />
//                             <RadioSpan value="low" />
//                             Low
//                         </RadioLabel>
//                         <RadioLabel>
//                             <RadioField
//                                 type="radio"
//                                 name="priority"
//                                 value="medium"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                             />
//                             <RadioSpan value="medium" />
//                             Medium
//                         </RadioLabel>
//                         <RadioLabel>
//                             <RadioField
//                                 type="radio"
//                                 name="priority"
//                                 value="high"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                             />
//                             <RadioSpan value="high" />
//                             High
//                         </RadioLabel>
//                     </RadioWrapper>

//                     {/* <button type="submit">Ok</button> */}

//                     <ButtonWrapper>
//                         <ButtonAction type="submit">
//                             {action === 'edit' ? 'Edit' : 'Add'}
//                         </ButtonAction>
//                         <ButtonCancel type="button" onClick={onClose}>
//                             Cancel
//                         </ButtonCancel>
//                     </ButtonWrapper>

//                     <ButtonCloseWrap
//                         type="button"
//                         aria-label="close button"
//                         onClick={onClose}
//                     >
//                         <svg width="24" height="24">
//                             <use href={`${close}#x-close`} />
//                         </svg>
//                     </ButtonCloseWrap>
//                 </Form>
//             )}
//         </Formik>
//     );
// };
