import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';

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
import { ButtonEye } from '../RegisterForm/RegisterForm.styled';

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

    const [icon, setIcon] = useState(<BsEyeFill />);
    const [type, setType] = useState('password');

    const handlerEyeClick = () => {
        if (type === 'password') {
            setType('text');
            return setIcon(<BsEyeSlashFill />);
        }
        setIcon(<BsEyeFill />);
        setType('password');
    };

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
                                type={type}
                                name="password"
                                placeholder="*******"
                            />
                            <ButtonEye onClick={handlerEyeClick}>
                                {icon}
                            </ButtonEye>
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
