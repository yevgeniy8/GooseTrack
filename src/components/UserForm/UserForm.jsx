import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import sprite from '../../images/icons.svg';

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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
import { BirthdayDatePicker } from './ReactDatePickerCalendar';
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
    birthday: yup.date().required(),
    phone: yup.string().matches(phoneRegexp).required(),
    skype: yup.string().max(16).required(),
});

export const UserForm = () => {
   
    const initialValues = {
        name: '',
        birthday: '',
        email: '',
        phone: '',
        skype: '',
    };

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };
    
 
    return (
       
        <MainContainer>
            <AvatarContainer>
                <ImgContainer>
                    <ImgAvatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObPqifjaY_XhtqkVFqR54lyFL-UL1CDwE9vSJcHWBpg&s"
                        alt="avatar"
                    />
                </ImgContainer>
                <InputFile type="file" />
                <SvgPlus width="14" height="14">
                    <use href={`${sprite}#icon-image`} />
                </SvgPlus>
                <UserName>User Name</UserName>
                <UserP>User</UserP>
            </AvatarContainer>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <StyledForm>
                    <FieldsWrap>
                        <LabelWrap>
                            <Label htmlFor="">
                                <Span>User name</Span>
                                <InputForm
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                />
                                <Error component="div" name="name" />
                            </Label>
                        </LabelWrap>
                        <LabelWrap>
                            <Label htmlFor="">
                                <Span> Birthday</Span>
                             <BirthdayDatePicker/>
                                <Error component="div" name="birthday" />
                            </Label>
                        </LabelWrap>

                        <LabelWrap>
                            <Label htmlFor="">
                                <Span>Email</Span>
                                <InputForm
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
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
                                />
                                <Error component="div" name="skype" />
                            </Label>
                        </LabelWrap>
                    </FieldsWrap>

                    <Button type="submit">Save changes</Button>
                </StyledForm>
            </Formik>
        </MainContainer>
     
    );
};
