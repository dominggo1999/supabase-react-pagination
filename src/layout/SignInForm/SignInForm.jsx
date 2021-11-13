import React from 'react';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import {
  Input, Label, Error, FormWrapper,
} from '../../shared/Form/Form';
import { useAuth } from '../../context/AuthContext';
import FormHeader from '../../shared/FormHeader/FormHeader';
import { Container } from '../../shared/Flexi';

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
  const handleSubmit = (values) => {
    console.log(values);

    // SignUp here

    // If success redirect to dashboard
  };

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
      </FormWrapper>
    </Container>
  );
};

export default SignInForm;
