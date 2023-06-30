import { NavLink } from 'react-router-dom';
import React from 'react';
import { Nav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink  to="/login">
        Log In
      </NavLink>
    </Nav>
  );
};