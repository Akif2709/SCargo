import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  ACCOUNT_VERIFIED,
  ACCOUNT_NOT_VERIFIED,
  RESEND_CONFIRMATION,
  RESEND_CONFIRMATION_FAIL,
  SEND_PASSWORD_LINK_SUCCESS,
  SEND_PASSWORD_LINK_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  CHECK_PASS_TOKEN_SUCCESS,
  CHECK_PASS_TOKEN_FAIL,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAIL,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Register with social network

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};

// Verifying user account
export const verifyAccount = confirmationToken => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ confirmationToken });

  try {
    const res = await axios.post(`/api/users/verify/${confirmationToken}`, body, config);

    dispatch({
      type: ACCOUNT_VERIFIED,
      payload: res.data.msg,
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: ACCOUNT_NOT_VERIFIED,
      payload: err.response.data.msg,
    });
  }
};
