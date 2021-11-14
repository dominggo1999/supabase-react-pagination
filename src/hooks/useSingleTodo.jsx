import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getSingleTodo } from '../services/todo';

const useSingleTodo = (todoId, setLoading, setError) => {
  const [todoItem, setTodoItem] = useState();

  const todo = async () => {
    const { data, success } = await getSingleTodo(todoId);

    if(success) {
      setTodoItem(data);
    } else {
      setError('Something went wroing');
    }
    setLoading(false);
  };

  useEffect(() => {
    todo();
  }, []);

  return todoItem;
};

export default useSingleTodo;
