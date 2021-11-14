import React, { useState } from 'react';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import {
  Input, Label, Error, FormWrapper,
} from '../../shared/Form/Form';
import { useAuth } from '../../context/AuthContext';
import FormHeader from '../../shared/FormHeader/FormHeader';
import { Container } from '../../shared/Flexi';
import { signUp } from '../../services/auth';
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

const SignUpForm = () => {
  const [error, setError] = useState();
  const history = useHistory();

  const handleSubmit = async (values) => {
    const { success } = await signUp(values.email, values.password, setError);
    if(success) history.push('/');
  };

  if(error) {
    return <h1>{error.code}</h1>;
  }

  return (
    <Container>
      <FormWrapper>
        <FormHeader>Sign Up</FormHeader>
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
            <button type="submit">Sign Up</button>
          </Form>
        </Formik>
        <FormNavigation>
          Already have an account ?
          {' '}
          <Link to="sign-in">
            Sign In
          </Link>
        </FormNavigation>
      </FormWrapper>
    </Container>
  );
};

export default SignUpForm;
