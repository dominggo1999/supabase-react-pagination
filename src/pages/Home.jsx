import React from 'react';
import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from '../shared/Flexi';
import Button from '../shared/Button/Button';
import { genData } from '../services/test';

export const Call = styled.div`
  ${tw`
    flex 
    flex-col
    items-center 
    justify-center
    min-h-screen 
  `}
`;

const populateData = async () => {
  await genData();
};

const Home = () => {
  return (
    <Container>
      <Call>
        <Link to="/users/1">
          <Button>
            Users
          </Button>
        </Link>
      </Call>
    </Container>
  );
};

export default Home;
