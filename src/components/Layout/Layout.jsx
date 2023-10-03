import AppBar from 'components/AppBar/AppBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { CircularProgress } from '@mui/material';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
