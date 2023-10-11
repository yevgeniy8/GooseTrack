import { Formik } from 'formik';
import * as Yup from 'yup';
// import { useThemeContext } from 'hooks/ThemeContext';
import close from '../../../images/icons.svg';
import plus from '../../../images/icons.svg';
import pencil from '../../../images/icons.svg';

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
    RadioWrapper,
    TimeWrapper,
    RadioSpan,
    RadioLabel,
    RadioField,
} from './TaskForm.styled';

import { addTask, editTask } from 'redux/calendar/calendarOperations';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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
});

export const TaskForm = ({ value, onClose, action, task }) => {
    // const { theme } = useThemeContext();
    const dispatch = useDispatch();
    const { currentDay } = useParams();

    const handleSubmit = (values, actions) => {
        if (action) {
            dispatch(editTask({ id: task._id, task: values }));
            onClose();
            return;
        }

        const obj = {
            ...values,
            category: value,
            date: currentDay,
        };
        // console.log(obj);
        dispatch(addTask(obj));
        onClose();
    };

    return (
        <Formik
            validationSchema={TaskSchema}
            initialValues={{
                title: task?.title || '',
                start: task?.start || '09:00',
                end: task?.end || '09:30',
                priority: task?.priority || 'low',
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
                        <ErrorMessage name="priority" component="div" />
                    </RadioWrapper>

                    {/* <button type="submit">Ok</button> */}

                    <ButtonWrapper>
                        {action === 'edit' ? (
                            <ButtonAction type="submit">
                                <svg width="18" height="18" stroke="#fff">
                                    <use href={`${pencil}#pencil`} />
                                </svg>
                                Edit
                            </ButtonAction>
                        ) : (
                            <ButtonAction type="submit">
                                <svg width="20" height="20" stroke="#fff">
                                    <use href={`${plus}#add-plus`} />
                                </svg>
                                Add
                            </ButtonAction>
                        )}

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
