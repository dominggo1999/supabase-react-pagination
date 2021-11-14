import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getTodos } from '../services/todo';

const useTodoList = (setLoading, setError) => {
  const [todoList, setTodoList] = useState([]);
  const { currentUser } = useAuth();

  const todo = async () => {
    const { data, success } = await getTodos(currentUser.uid);

    if(success) {
      setTodoList(data);
    } else {
      setError('Something went wroing');
    }
    setLoading(false);
  };

  useEffect(() => {
    todo();
  }, []);

  return todoList;
};

export default useTodoList;
