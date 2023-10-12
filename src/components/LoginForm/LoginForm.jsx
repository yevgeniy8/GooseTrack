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
  SvgStatus,
  ErrorMes,
  Home,
  TitleContainer,
} from '../RegisterForm/RegisterForm.styled';

// import { Svg } from '../RegisterForm/RegisterForm.styled';
import { ButtonEye } from '../RegisterForm/RegisterForm.styled';

import sprite from '../../images/icons.svg';

import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
  email: yup.string().email().matches(emailRegexp, 'email invalid').required(),
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
    // actions.resetForm();
  };

  return (
    <ContainerForm>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handlerSubmit}>
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
              <Title>Log In</Title>
              <Home to={'/'}>Home</Home>
            </TitleContainer>
            <div>
              <Label htmlFor="">
                <Span
                  style={{
                    color:
                      (touched.email && errors.email && '#E74A3B') ||
                      (touched.email && !errors.email && '#3CBC81') ||
                      'black',
                  }}
                >
                  Email
                </Span>
                <InputForm
                  type="email"
                  name="email"
                  placeholder="nadiia@gmail.com"
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
                    <ErrorMes>This is an CORRECT name</ErrorMes>
                  ))}

                {touched.email && (
                  <SvgStatus width="24" height="24" error={errors.email}>
                    <use href={`${sprite}${errors.email ? '#error-outline' : '#done'}`} />
                  </SvgStatus>
                )}
              </Label>
            </div>

            <div>
              <Label htmlFor="">
                <Span
                  style={{
                    color:
                      (touched.password && errors.password && '#E74A3B') ||
                      (touched.password && !errors.password && '#3CBC81') ||
                      'black',
                  }}
                >
                  Password
                </Span>
                <InputFormMargin0
                  type={type}
                  name="password"
                  placeholder="*******"
                  value={values.password}
                  errors={errors.password}
                  touched={touched.password?.toString()}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ButtonEye type="button" onClick={handlerEyeClick}>
                  {icon}
                </ButtonEye>

                {/* <Error component="div" name="password" /> */}

                {touched.password &&
                  (errors.password ? (
                    <Error component="div" name="password" />
                  ) : (
                    <ErrorMes>This is an CORRECT name</ErrorMes>
                  ))}

                {touched.password && (
                  <SvgStatus width="24" height="24" error={errors.password}>
                    <use href={`${sprite}${errors.password ? '#error-outline' : '#done'}`} />
                  </SvgStatus>
                )}
              </Label>
            </div>

            <Button type="submit">
              Log In
              <svg width="20" height="20">
                <use href={`${sprite}#log-in`} />
              </svg>
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
};

export default LoginForm;
