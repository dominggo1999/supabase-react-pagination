import React, { useState } from 'react';
import { Container, Row } from '../../shared/Flexi';
import { TodoListWrapper, SpinnerWrapper } from './TodoList.style';
import { todos }from '../../data/todos';
import Spinner from '../../shared/Spinner/Spinner';
import TodoCard from '../TodoCard/TodoCard';
import 'twin.macro';

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // Fetch data here
  // const {todos, loading, error} = useTodos(userId);

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

  return (
    <Container>
      <TodoListWrapper>
        <Row tw="gap-y-8">
          {
            todos && todos.length > 1 && todos.map(({ id, ...rest }) => {
              return (
                <TodoCard
                  key={id}
                  {...rest}
                />
              );
            })
          }
        </Row>
      </TodoListWrapper>
    </Container>
  );
};

export default TodoList;
