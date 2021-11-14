import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Input, Label, Error, FormWrapper,
} from '../../shared/Form/Form';

import { useAuth } from '../../context/AuthContext';
import FormHeader from '../../shared/FormHeader/FormHeader';
import { Container } from '../../shared/Flexi';
import { signIn } from '../../services/auth';
import FormNavigation from '../../shared/FormNavigation/FormNavigation';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(8, 'must be longer than 8')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [error, setError] = useState();
  const history = useHistory();

  const handleSubmit = async (values) => {
    const { success } = await signIn(values.email, values.password, setError);
    if(success) history.push('/');
  };

  if(error) {
    return <h1>{error.code}</h1>;
  }

  return (
    <Container>
      <FormWrapper>
        <FormHeader>Sign In</FormHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Label htmlFor="email">Email</Label>
            <Field
              type="email"
              required
              placeholder="Email"
              name="email"
              as={Input}
              validateOnChange={false}
            >
            </Field>
            <ErrorMessage
              name="email"
              component={Error}
            />
            <Label htmlFor="password">Password</Label>
            <Field
              type="password"
              required
              placeholder="*******"
              name="password"
              as={Input}
              validateOnChange={false}
            >
            </Field>
            <ErrorMessage
              name="password"
              component={Error}
            />
            <button type="submit">Sign in</button>
          </Form>
        </Formik>
        <FormNavigation>
          Don&apos;t have an account?
          {' '}
          <Link to="sign-up">
            Sign Up
          </Link>
        </FormNavigation>
      </FormWrapper>
    </Container>
  );
};

export default SignInForm;
