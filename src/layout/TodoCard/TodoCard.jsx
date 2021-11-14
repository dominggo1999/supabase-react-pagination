import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { Col } from '../../shared/Flexi';
import {
  Card, Title, Description, Actions, LeftAction, RightAction,
} from './TodoCard.style';
import 'twin.macro';
import Button from '../../shared/Button/Button';
import Link from '../../shared/Link';
import { deleteTodo, changeTodoStatus } from '../../services/todo';
import { useAuth } from '../../context/AuthContext';

const TodoCard = ({
  item,
}) => {
  const {
    title, description, finished, id,
  } = item;
  const [status, setStatus] = useState(finished);
  const [error, setError] = useState();
  const { currentUser } = useAuth();

  const changeStatus = async () => {
    setStatus(!status);
    // call service here
    const { success } = await changeTodoStatus(!status, id, currentUser, setError);
  };

  const handleDeleteTodo = async () => {
    // Call service here
    const { success } = await deleteTodo(id);
  };

  return (
    <Col tw="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
      <Card status={status}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Actions>
          <LeftAction>
            <Button onClick={changeStatus}>{status ? 'Undone' : 'Done'}</Button>
          </LeftAction>
          <RightAction>
            <Button onClick={() => handleDeleteTodo()}>
              <RiDeleteBinLine />
            </Button>
            <Link to={`/edit-todo/${id}`}>
              <Button>
                <FaEdit />
              </Button>
            </Link>
          </RightAction>
        </Actions>
      </Card>
    </Col>
  );
};

export default TodoCard;
