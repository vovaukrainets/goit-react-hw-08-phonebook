import { Container } from '@mui/material';
import { StyledSimpleLink } from 'components/Commons/Commons.styled';
import React from 'react';

const Home = () => {
  return (
    <Container
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        mt: 3,
        minWidth: 320,
      }}
    >
      <h1>Phone Book welcome!</h1>
      <p>
        <StyledSimpleLink to="/register">Sign Up</StyledSimpleLink> or{' '}
        <StyledSimpleLink to="/login">Log In</StyledSimpleLink> for beginning.
      </p>
    </Container>
  );
};

export default Home;
