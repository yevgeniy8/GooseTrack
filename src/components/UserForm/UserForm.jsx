import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import sprite from '../../images/icons.svg';

import {
    AvatarContainer,
    Button,
    Error,
    IconDone,
    IconErr,
    ImgAvatar,
    InputFile,
    InputForm,
    Label,
    LabelWrap,
    MainContainer,
    Span,
    StyledForm,
    SvgPlus,
    UserName,
    UserP,
} from './UserForm.styled';
import { ImgContainer } from './UserForm.styled';
import { FieldsWrap } from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import {
    DatePickWrapper,
    DatePickerStyled,
} from './ReactDatePickerCalendar.styled';
import moment from 'moment/moment';
import { editUser } from 'redux/auth/authOperations';

const dayMoment = moment().format('DD/MM/YYYY');
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegexp = /^\+380\d{9}$/;

const schema = yup.object().shape({
    name: yup.string().max(16).required(),
    email: yup
        .string()
        .email()
        .matches(emailRegexp, 'email invalid')
        .required(),
    birthday: yup.date().max(dayMoment, 'Birthday must be earlier than today'),
    phone: yup.string().matches(phoneRegexp),
    skype: yup.string().max(16),
});

function handleInput(errors, touched, fieldName) {
    if (errors[fieldName] && touched[fieldName]) {
        return (
            <IconErr width={24} height={24}>
                <use href={`${sprite}#error-outline`} />
            </IconErr>
        );
    } else if (touched[fieldName]) {
        return (
            <IconDone width={24} height={24}>
                <use href={`${sprite}#done`} />
            </IconDone>
        );
    }
}

export const UserForm = () => {
    const [currentAvatar, setCurrentAvatar] = useState(null);
    const [currentBirthday, setCurrentBirthday] = useState(new Date());

    const dispatch = useDispatch();

    const user = useSelector(selectUser);
    // console.log(user);

    const initialValues = {
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        skype: user.skype || '',
    };

    const handleChange = e => {
        setCurrentAvatar(e.target.files[0]);
        console.log(currentAvatar);
    };

    const handleSubmit = (values, actions) => {
        const newData = {
            ...values,
            birthday: currentBirthday,
        };

        dispatch(editUser(newData));

        actions.resetForm();
    };

    return (
        <MainContainer>
            <AvatarContainer
                animate={{ y: -50 }}
                transition={{ ease: 'easeOut', duration: 2 }}
            >
                <ImgContainer>
                    <ImgAvatar src={user.avatarURL} alt="avatar" />
                </ImgContainer>
                <InputFile
                    type="file"
                    onChange={handleChange}
                    name="avatar"
                    accept="image/png, image/jpeg, image/jpg"
                />
                <SvgPlus width="14" height="14">
                    <use href={`${sprite}#icon-image`} />
                </SvgPlus>
                <UserName>{user.name || 'User Name'}</UserName>
                <UserP>User</UserP>
            </AvatarContainer>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values, handleChange }) => {
                    return (
                        <StyledForm>
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
                                    <Label htmlFor="">
                                        <Span> Birthday</Span>
                                        <DatePickWrapper>
                                            <DatePickerStyled
                                                selected={currentBirthday}
                                                onChange={date =>
                                                    setCurrentBirthday(date)
                                                }
                                                formatWeekDay={nameOfDay =>
                                                    nameOfDay.charAt(0)
                                                }
                                                name="birthday"
                                                maxDate={new Date()}
                                                className={
                                                    errors.birthday
                                                        ? 'input-error'
                                                        : ''
                                                }
                                                showYearDropdown
                                                value={user.birthday}
                                            />
                                        </DatePickWrapper>
                                        <Error
                                            component="div"
                                            name="birthday"
                                        />
                                        {handleInput(
                                            errors,
                                            touched,
                                            'birthday'
                                        )}
                                    </Label>
                                </LabelWrap>

                                <LabelWrap>
                                    <Label htmlFor="">
                                        <Span>Email</Span>
                                        <InputForm
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            // onChange={handleChange}
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
                                            // onChange={handleChange}
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
                                            // onChange={handleChange}
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
