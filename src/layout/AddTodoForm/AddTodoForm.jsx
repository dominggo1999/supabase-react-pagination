import React, { useState } from 'react';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import {
  Input, Label, Error, FormWrapper,
} from '../../shared/Form/Form';
import FormHeader from '../../shared/FormHeader/FormHeader';
import { Container } from '../../shared/Flexi';
import { addTodo } from '../../services/todo';
import { useAuth } from '../../context/AuthContext';

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
  const [error, setError] = useState();
  const history = useHistory();

  const { currentUser } = useAuth();

  const handleSubmit = async (values) => {
    // call service here
    const { success } = await addTodo(values.title, values.description, currentUser, setError);
    if(success) history.push('/');
  };

  if(error) {
    return <h1>failed</h1>;
  }

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
