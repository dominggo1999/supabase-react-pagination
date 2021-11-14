import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../shared/Flexi';
import Button from '../../shared/Button/Button';
import { Nav, Brand, Links } from './Navbar.style';
import { useAuth } from '../../context/AuthContext';
import { logout } from '../../services/auth';

const Navbar = () => {
  const { currentUser } = useAuth();

  const signOut = () => {
    logout();
  };

  return (
    <Container>
      <Nav>
        <Brand>
          <Link to="/">
            TODOZ
          </Link>
        </Brand>
        <Links>
          {
            currentUser
            && (
            <>
              <Link to="/add-todo">
                <Button>Add Todo</Button>
              </Link>
              <Button onClick={signOut}>Logout</Button>
            </>
            )
          }
          {
            !currentUser
            && (
            <Link to="/sign-in">
              <Button>Sign in</Button>
            </Link>
            )
          }
        </Links>
      </Nav>
    </Container>
  );
};

export default Navbar;
