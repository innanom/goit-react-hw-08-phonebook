import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { useAuth } from '../hooks';
import {Wrapper, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome,</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};