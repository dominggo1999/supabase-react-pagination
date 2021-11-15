import React from 'react';
import { Col } from '../../shared/Flexi';
import { Card as CardWrapper, Name, Email } from './Card.style';
import 'twin.macro';

const Card = ({ item }) => {
  const { name, email } = item;

  return (
    <Col tw="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
      <CardWrapper>
        <Name>{name}</Name>
        <Email>{email}</Email>
      </CardWrapper>
    </Col>
  );
};

export default Card;
