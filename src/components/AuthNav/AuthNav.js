import { NavLink } from 'react-router-dom';
// import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNav>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink  to="/login">
        Log In
      </NavLink>
    </AuthNav>
  );
};