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
} from '../RegisterForm/RegisterForm.styled';

import { Svg } from '../RegisterForm/RegisterForm.styled';

import sprite from '../../images/icons.svg';

import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
    email: yup
        .string()
        .email()
        .matches(emailRegexp, 'email invalid')
        .required(),
    password: yup.string().min(6).required(),
});

const LoginForm = () => {
    const dispatch = useDispatch();

    // console.log(user);

    const initialValues = {
        email: '',
        password: '',
    };

    const handlerSubmit = (values, actions) => {
        dispatch(login(values));
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
                    <Title>Log In</Title>

                    <div>
                        <Label htmlFor="">
                            <Span>Email</Span>
                            <InputForm
                                type="email"
                                name="email"
                                placeholder="nadiia@gmail.com"
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
                                placeholder="*******"
                            />
                            <Error component="div" name="password" />
                        </Label>
                    </div>

                    <Button type="submit">
                        Log In
                        <Svg width="20" height="20">
                            <use href={`${sprite}#log-in`} />
                        </Svg>
                    </Button>
                </Form>
            </Formik>
        </ContainerForm>
    );
};

export default LoginForm;
