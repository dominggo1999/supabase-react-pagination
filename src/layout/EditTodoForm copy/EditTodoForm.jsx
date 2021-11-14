import React, { useState } from 'react';
import {
  Field, Formik, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useParams, useHistory } from 'react-router-dom';
import {
  Input, Label, Error, FormWrapper,
} from '../../shared/Form/Form';
import { useAuth } from '../../context/AuthContext';
import FormHeader from '../../shared/FormHeader/FormHeader';
import { Container } from '../../shared/Flexi';
import Link from '../../shared/Link';
import useSingleTodo from '../../hooks/useSingleTodo';
import Spinner from '../../shared/Spinner/Spinner';
import { SpinnerWrapper } from '../../shared/Spinner/Spinner.style';
import { updateTodo } from '../../services/todo';

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

const EditTodoForm = () => {
  const { todoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [submitError, setSubmitError] = useState();
  const history = useHistory();
  const { currentUser } = useAuth();

  // get single todo data using hooks
  const todoItem = useSingleTodo(todoId, setLoading, setError);

  // if loading display loading components
  if(loading) {
    return (
      <Container>
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      </Container>
    );
  }

  // If error display error modal
  if(error) {
    return <p>an error occured, try again later</p>;
  }

  const { title, description } = todoItem;

  const initialValues = {
    title,
    description,
  };

  const handleSubmit = async (values) => {
    // call service here
    const { success } = await updateTodo(values.title, values.description, todoId, currentUser, setError);
    if(success) history.push('/');
  };

  return (
    <Container>
      <FormWrapper>
        <FormHeader>Edit Todo</FormHeader>
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
            <button type="submit">Update Todo</button>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </Form>
        </Formik>
      </FormWrapper>
    </Container>
  );
};

export default EditTodoForm;
