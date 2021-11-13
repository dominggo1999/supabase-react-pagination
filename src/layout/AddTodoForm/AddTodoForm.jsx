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
  title: Yup.string()
    .required('Required'),
  description: Yup.string()
    .required('Required'),
});

const initialValues = {
  title: '',
  description: '',
};

const AddTodoForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // call service here
  };

  return (
    <Container>
      <FormWrapper>
        <FormHeader>Add new todo</FormHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Label htmlFor="title">Title</Label>
            <Field
              type="text"
              required
              name="title"
              as={Input}
              validateOnChange={false}
            >
            </Field>
            <ErrorMessage
              name="title"
              component={Error}
            />

            <Label htmlFor="description">Description</Label>
            <Field
              type="text"
              required
              name="description"
              as={Input}
              validateOnChange={false}
            >
            </Field>
            <ErrorMessage
              name="description"
              component={Error}
            />
            <button type="submit">Add Todo</button>
          </Form>
        </Formik>
      </FormWrapper>
    </Container>
  );
};

export default AddTodoForm;
