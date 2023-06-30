import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/operations';
import { useAuth } from '../hooks';
import {Wrapper, UserName, BtnLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <BtnLogout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnLogout>
    </Wrapper>
  );
};