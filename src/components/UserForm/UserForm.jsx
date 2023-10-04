import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import sprite from '../../images/icons.svg';

import {
    AvatarContainer,
    Button,
    Error,
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
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import {
    DatePickWrapper,
    DatePickerStyled,
} from './ReactDatePickerCalendar.styled';
import moment from 'moment/moment';

const dayMoment = moment().format('DD/MM/YYYY');

// import { Calendar } from './Calendar';

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

export const UserForm = () => {
    const [currentAvatar, setCurrentAvatar] = useState('');
    // const [currentPhone, setCurrentPhone] = useState('');
    // const [currentName, setCurrentName] = useState('');
    // const [currentEmail, setCurrentEmail] = useState('');
    // const [currentSkype, setCurrentSkype] = useState('');
    const [currentBirthday, setCurrentBirthday] = useState(new Date());

    const user = useSelector(selectUser);
    // console.log(user);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        skype: '',
    };

    const handleChange = ({ target }) => {
        setCurrentAvatar(target.files[0]);
    };

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
        <MainContainer>
            <AvatarContainer>
                <ImgContainer>
                    <ImgAvatar src={user.avatarUrl} alt="avatar" />
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
                {({
              errors,
              touched,
              values
             }) => {
                    return (
                        <StyledForm>
                            <FieldsWrap>
                                <LabelWrap>
                                    <Label htmlFor="">
                                        <Span>User name</Span>
                                        <InputForm
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            // onChange={handleChange}
                                            value={values.name}
                                        />
                                        <Error component="div" name="name" />
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
                                                name='birthday'
                                            />
                                        </DatePickWrapper>
                                        <Error
                                            component="div"
                                            name="birthday"
                                        />
                                    </Label>
                                </LabelWrap>

                                <LabelWrap>
                                    <Label htmlFor="">
                                        <Span>Email</Span>
                                        <InputForm
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            // onChange={handleChange}
                                            value={values.email}
                                        />
                                        <Error component="div" name="email" />
                                    </Label>
                                </LabelWrap>
                                <LabelWrap>
                                    <Label htmlFor="">
                                        <Span>Phone</Span>
                                        <InputForm
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter phone number"
                                            // onChange={handleChange}
                                            value={values.phone}
                                        />
                                        <Error component="div" name="phone" />
                                    </Label>
                                </LabelWrap>
                                <LabelWrap>
                                    <Label htmlFor="">
                                        <Span>Skype</Span>
                                        <InputForm
                                            type="text"
                                            name="skype"
                                            placeholder="Add skype number"
                                            value={values.skype}
                                            // onChange={handleChange}
                                        />
                                        <Error component="div" name="skype" />
                                    </Label>
                                </LabelWrap>
                            </FieldsWrap>

                            <Button type="submit">Save changes</Button>
                        </StyledForm>
                    );
                }}
            </Formik>
        </MainContainer>
    );
};
