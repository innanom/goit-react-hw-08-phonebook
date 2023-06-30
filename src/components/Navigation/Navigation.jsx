import React from 'react';
import { useAuth } from '../hooks';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Nav to="/">
        Home
      </Nav>
      {isLoggedIn && (
        <Nav  to="/contacts">
          Contacts
        </Nav>
      )}
    </div>
  );
};