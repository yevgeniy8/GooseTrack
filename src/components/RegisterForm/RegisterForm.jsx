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
    ButtonEye,
    ErrorMes,
    SvgStatus,
    Home,
    TitleContainer,
} from './RegisterForm.styled';

import sprite from '../../images/icons.svg';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
// import Notiflix from 'notiflix';
// import { useNavigate } from 'react-router-dom';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// const baseURL = 'https://goose-track-backend-q3re.onrender.com';

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
    // const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handlerSubmit = (values, actions) => {
        dispatch(register(values));
        // navigate('/user');
        // console.log(values);
        actions.resetForm();
    };

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

    return (
        <ContainerForm>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handlerSubmit}
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
                        <TitleContainer>
                            <Title>Sign Up</Title>
                            <Home to={'/'}>Home</Home>
                        </TitleContainer>
                        <div>
                            <Label htmlFor="">
                                <Span>Name</Span>
                                <InputForm
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={values.name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    errors={errors.name}
                                    touched={touched.name?.toString()}
                                />

                                {touched.name &&
                                    (errors.name ? (
                                        <Error component="div" name="name" />
                                    ) : (
                                        <ErrorMes>
                                            This is an CORRECT name
                                        </ErrorMes>
                                    ))}

                                {touched.name && (
                                    <SvgStatus
                                        width="24"
                                        height="24"
                                        error={errors.name}
                                    >
                                        <use
                                            href={`${sprite}${
                                                errors.name
                                                    ? '#error-outline'
                                                    : '#done'
                                            }`}
                                        />
                                    </SvgStatus>
                                )}
                            </Label>
                        </div>

                        <div>
                            <Label htmlFor="">
                                <Span>Email</Span>
                                <InputForm
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={values.email}
                                    errors={errors.email}
                                    touched={touched.email?.toString()}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {/* <Error component="div" name="email" /> */}

                                {touched.email &&
                                    (errors.email ? (
                                        <Error component="div" name="email" />
                                    ) : (
                                        <ErrorMes>
                                            This is an CORRECT name
                                        </ErrorMes>
                                    ))}

                                {touched.email && (
                                    <SvgStatus
                                        width="24"
                                        height="24"
                                        error={errors.email}
                                    >
                                        <use
                                            href={`${sprite}${
                                                errors.email
                                                    ? '#error-outline'
                                                    : '#done'
                                            }`}
                                        />
                                    </SvgStatus>
                                )}
                            </Label>
                        </div>

                        <div>
                            <Label htmlFor="">
                                <Span>Password</Span>
                                <InputFormMargin0
                                    type={type}
                                    name="password"
                                    placeholder="Enter password"
                                    value={values.password}
                                    errors={errors.password}
                                    touched={touched.password?.toString()}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ButtonEye onClick={handlerEyeClick}>
                                    {icon}
                                </ButtonEye>

                                {/* <Error component="div" name="password" /> */}

                                {touched.password &&
                                    (errors.password ? (
                                        <Error
                                            component="div"
                                            name="password"
                                        />
                                    ) : (
                                        <ErrorMes>
                                            This is an CORRECT name
                                        </ErrorMes>
                                    ))}

                                {touched.password && (
                                    <SvgStatus
                                        width="24"
                                        height="24"
                                        error={errors.password}
                                    >
                                        <use
                                            href={`${sprite}${
                                                errors.password
                                                    ? '#error-outline'
                                                    : '#done'
                                            }`}
                                        />
                                    </SvgStatus>
                                )}
                            </Label>
                        </div>

                        <Button type="submit">
                            Sign Up
                            <svg width="20" height="20">
                                <use href={`${sprite}#log-in`} />
                            </svg>
                        </Button>

                        {/* <a href={`${baseURL}/auth/google`}>Google</a> */}
                    </Form>
                )}
            </Formik>
        </ContainerForm>
    );
};

export default RegisterForm;
