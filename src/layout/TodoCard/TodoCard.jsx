import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Col } from '../../shared/Flexi';
import {
  Card, Title, Description, Actions, LeftAction, RightAction,
} from './TodoCard.style';
import 'twin.macro';
import Button from '../../shared/Button/Button';
import Link from '../../shared/Link';

const TodoCard = ({
  title, description, finished, id,
}) => {
  const [status, setStatus] = useState(finished);

  const changeStatus = () => {
    // Call service here
    // updateStatus(status);
    setStatus(!status);
  };

  const deleteTodo = (id) => {
    // Call service here
  };

  return (
    <Col tw="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
      <Card>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Actions>
          <LeftAction>
            <Button onClick={changeStatus}>{status ? 'Undone' : 'Done'}</Button>
          </LeftAction>
          <RightAction>
            <Button onClick={() => deleteTodo(id)}>
              <RiDeleteBinLine />
            </Button>
            <Link to="/edit-todo/1">
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
