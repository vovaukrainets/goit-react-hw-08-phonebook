import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  handleLogIn,
  handleLogOut,
  handlePending,
  handleRefreshUser,
  handleRegister,
  handleRejected,
} from './handles';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegister)
      .addCase(logIn.fulfilled, handleLogIn)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
