import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import {
    ContainerForm,
    Title,
    Span,
    InputForm,
    Button,
    InputFormMargin0,
    Error,
    Label,
    Svg,
} from './RegisterForm.styled';

import sprite from '../../images/icons.svg';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup
        .string()
        .email()
        .matches(emailRegexp, 'email invalid')
        .required(),
    password: yup.string().min(6).required(),
});

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handlerSubmit = (values, actions) => {
        dispatch(register(values));
        Notiflix.Notify.success('Ты зарегался лох');
        navigate('/user');
        // console.log(values);
        actions.resetForm();
    };

    return (
        <ContainerForm>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handlerSubmit}
            >
                <Form>
                    <Title>Sign Up</Title>
                    <div>
                        <Label htmlFor="">
                            <Span>Name</Span>
                            <InputForm
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                            <Error component="div" name="name" />
                        </Label>
                    </div>

                    <div>
                        <Label htmlFor="">
                            <Span>Email</Span>
                            <InputForm
                                type="email"
                                name="email"
                                placeholder="Enter email"
                            />
                            <Error component="div" name="email" />
                        </Label>
                    </div>

                    <div>
                        <Label htmlFor="">
                            <Span>Password</Span>
                            <InputFormMargin0
                                type="password"
                                name="password"
                                placeholder="Enter password"
                            />
                            <Error component="div" name="password" />
                        </Label>
                    </div>

                    <Button type="submit">
                        Sign Up
                        <Svg width="20" height="20">
                            <use href={`${sprite}#log-in`} />
                        </Svg>
                    </Button>
                </Form>
            </Formik>
        </ContainerForm>
    );
};

export default RegisterForm;