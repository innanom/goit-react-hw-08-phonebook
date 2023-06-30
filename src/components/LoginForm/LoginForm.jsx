import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/Auth/operations';
import {Form, Label, BtnLogin, InputForm} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <InputForm type="email" name="email" />
      </Label>
      <Label >
        Password
        <InputForm type="password" name="password" />
      </Label>
      <BtnLogin type="submit">Log In</BtnLogin>
    </Form>
  );
};
