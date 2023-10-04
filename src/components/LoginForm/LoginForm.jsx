import { Button, FormGroup, TextField } from '@mui/material';
import { StyledSimpleLink } from 'components/Commons/Commons.styled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`There is no input: ${name}!`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email,
        password,
      })
    );
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup
        sx={{
          display: 'inline-flex',
          gap: 1,
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 320,
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          variant="outlined"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit" disabled={isLoading}>
          LogIn
        </Button>
        <StyledSimpleLink to="/register">Sign Up</StyledSimpleLink>
      </FormGroup>
    </form>
  );
};

export default LoginForm;
