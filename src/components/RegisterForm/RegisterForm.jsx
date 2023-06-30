
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';
import {Form, Label, BtnRegister, InputForm}from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <InputForm type="text" name="name" />
      </Label>
      <Label >
        Email
        <InputForm type="email" name="email" />
      </Label>
      <Label >
        Password
        <InputForm type="password" name="password" />
      </Label>
      <BtnRegister type="submit">Register</BtnRegister>
    </Form>
  );
};