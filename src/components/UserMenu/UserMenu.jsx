import { Button, FormGroup, Typography } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <FormGroup
      sx={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Typography variant="h6">Welcome, {user.name}</Typography>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </FormGroup>
  );
};

export default UserMenu;
