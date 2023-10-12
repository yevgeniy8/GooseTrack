import React, { useState } from 'react';
import { Formik } from 'formik';
import { FieldsWrap } from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { editUser } from 'redux/auth/authOperations';
import { UserInfo } from './UserInfo';
import handleInput from './helpers/handleInput';
import schema from './schemas/userSchema';
import { enGB } from 'date-fns/esm/locale';
import avatarDefault from '../../images/Avatar.png';
import { registerLocale } from 'react-datepicker';
import {
    Button,
    Error,
    InputForm,
    Label,
    LabelWrap,
    MainContainer,
    Span,
    StyledForm,
} from './UserForm.styled';
import {
    DatePickerStyled,
    DatePickerWrapp,
} from './ReactDatePickerCalendar.styled';

registerLocale('en', enGB);

export const UserForm = () => {
    const dispatch = useDispatch();
    // const [isFormChanged, setIsFormChanged] = useState(false);
    const [currentAvatar, setCurrentAvatar] = useState(null);

    const user = useSelector(selectUser);

    const initialValues = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        skype: user.skype,
        birthday: user.birthday || new Date(),
        avatarURL: user.avatarURL || avatarDefault,
    };

    console.log(initialValues);

    const handleSubmit = async (
        { name, phone, email, skype, birthday },
        actions
    ) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('skype', skype);
        formData.append('birthday', birthday);
        if (currentAvatar) {
            formData.append('avatar', currentAvatar);
        }

        dispatch(editUser(formData));
    };

    return (
        <MainContainer>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
                validateOnChange={false}
                enableReinitialize={true}
            >
                {({
                    errors,
                    touched,
                    values,
                    dirty,
                    handleChange,
                    setFieldValue,
                    setFieldTouched,
                    handleBlur,
                    isSubmitting,
                }) => {
                    console.log(values);
                    return (
                        <StyledForm>
                            <UserInfo
                                avatarURL={user.avatarURL}
                                userName={user.name}
                                setCurrentAvatar={setCurrentAvatar}
                                setFieldValue={setFieldValue}
                            />
                            <FieldsWrap
                                animate={{ y: -50 }}
                                transition={{ ease: 'easeOut', duration: 2 }}
                            >
                                <LabelWrap>
                                    <Label htmlFor="">
                                        <Span>User name</Span>
                                        <InputForm
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            className={
                                                errors.name && touched.name
                                                    ? 'input-error'
                                                    : touched.name
                                                    ? 'input-valid'
                                                    : ''
                                            }
                                        />
                                        <Error component="div" name="name" />
                                        {handleInput(errors, touched, 'name')}
                                    </Label>
                                </LabelWrap>
                                <LabelWrap>
                                    <Label htmlFor="name">
                                        <Span> Birthday</Span>
                                        <DatePickerWrapp>
                                            <DatePickerStyled
                                                name="birthday"
                                                selected={
                                                    new Date(values.birthday) ||
                                                    new Date()
                                                }
                                                className={
                                                    errors.birthday &&
                                                    touched.birthday
                                                        ? 'input-error'
                                                        : touched.birthday
                                                        ? 'input-valid'
                                                        : ''
                                                }
                                                dateFormat="yyyy/MM/dd"
                                                maxDate={new Date()}
                                                locale="en"
                                                showYearDropdown
                                                scrollableYearDropdown
                                                yearDropdownItemNumber={30}
                                                formatWeekDay={nameOfDay =>
                                                    nameOfDay.charAt(0)
                                                }
                                                onChange={date => {
                                                    setFieldValue(
                                                        'birthday',
                                                        date
                                                    );
                                                }}
                                                onBlur={() => {
                                                    setFieldTouched(
                                                        'birthday',
                                                        true
                                                    );
                                                }}
                                            />
                                            <Error
                                                component="div"
                                                name="birthday"
                                            />
                                            {handleInput(
                                                errors,
                                                touched,
                                                'birthday'
                                            )}
                                        </DatePickerWrapp>
                                    </Label>
                                </LabelWrap>
                                <LabelWrap>
                                    <Label htmlFor="">
                                        <Span>Email</Span>
                                        <InputForm
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={
                                                errors.email && touched.email
                                                    ? 'input-error'
                                                    : touched.email
                                                    ? 'input-valid'
                                                    : ''
                                            }
                                        />
                                        <Error component="div" name="email" />
                                        {handleInput(errors, touched, 'email')}
                                    </Label>
                                </LabelWrap>
                                <LabelWrap>
                                    <Label htmlFor="">
                                        <Span>Phone</Span>
                                        <InputForm
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                            className={[
                                                errors.phone && touched.phone
                                                    ? 'input-error'
                                                    : touched.phone
                                                    ? 'input-valid'
                                                    : '',
                                            ]}
                                        />
                                        <Error component="div" name="phone" />
                                        {handleInput(errors, touched, 'phone')}
                                    </Label>
                                </LabelWrap>
                                <LabelWrap>
                                    <Label htmlFor="">
                                        <Span>Skype</Span>
                                        <InputForm
                                            type="text"
                                            name="skype"
                                            placeholder="Add your skype number"
                                            value={values.skype}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.skype && touched.skype
                                                    ? 'input-error'
                                                    : touched.skype
                                                    ? 'input-valid'
                                                    : ''
                                            }
                                        />
                                        <Error component="div" name="skype" />
                                        {handleInput(errors, touched, 'skype')}
                                    </Label>
                                </LabelWrap>
                            </FieldsWrap>

                            <Button
                                animate={{ y: -25 }}
                                transition={{ ease: 'easeOut', duration: 2 }}
                                type="submit"
                                disabled={!dirty || isSubmitting}
                            >
                                Save changes
                            </Button>
                        </StyledForm>
                    );
                }}
            </Formik>
        </MainContainer>
    );
};
