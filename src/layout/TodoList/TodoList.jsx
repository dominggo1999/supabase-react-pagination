import React, { useState } from 'react';
import { Container, Row } from '../../shared/Flexi';
import { TodoListWrapper, SpinnerWrapper } from './TodoList.style';
import { todos }from '../../data/todos';
import Spinner from '../../shared/Spinner/Spinner';
import TodoCard from '../TodoCard/TodoCard';
import 'twin.macro';
import { useAuth } from '../../context/AuthContext';
import useTodoList from '../../hooks/useTodoList';

const TodoList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // Fetch data here
  // const {todos, loading, error} = useTodos(userId);
  const todoList = useTodoList(setLoading, setError);

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
            todoList && todoList.length > 0 && todoList.map((item) => {
              return (
                <TodoCard
                  key={item.id}
                  item={item}
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
