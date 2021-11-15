import React, { useState, useEffect, useRef } from 'react';
import {
  useParams, useLocation, useHistory, Redirect,
} from 'react-router-dom';
import { getData, costumersCount } from '../services/test';
import { Container, Row } from '../shared/Flexi';
import Card from '../layout/Card/Card';
import 'twin.macro';
import Spinner from '../shared/Spinner/Spinner';
import { SpinnerWrapper } from '../shared/Spinner/Spinner.style';

const useUsers = (params) => {
  const [users, setUsers] = useState();
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const {
        data, count, error,
      } = await getData(params);

      if(error) {
        setError(true);
        setLoading(false);
      }else{
        setUsers(data);
        setTotal(count);
        setError(false);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return {
    users, total, error, loading,
  };
};

const Users = () => {
  const { page } = useParams();
  const { pathname } = useLocation();
  const [perPage, setPerPage] = useState(10);

  // Fetch data here
  const {
    users, total, error, loading,
  } = useUsers(
    {
      currentPage: page,
      path: pathname,
      perPage,
      filter: 'a%',
    },
  );

  if(loading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if(error) {
    return <Redirect to="/" />;
  }

  return (
    <Container tw="my-10">
      <h1 tw="mb-5 font-bold text-3xl"> total results {' '} {total}</h1>
      <h1 tw="mb-5 font-bold text-3xl"> page {' '} {page}</h1>
      <Row tw="gap-y-8">
        {
          users && users.map((item) => {
            return (
              <Card
                key={item.id}
                item={item}
              />
            );
          })

        }
      </Row>
    </Container>
  );
};

export default Users;
