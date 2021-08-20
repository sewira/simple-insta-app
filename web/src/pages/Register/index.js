import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../redux/actions/UserAction';
import { isLogin } from '../../redux/reducers/userReducer';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    margin: '50px',
    padding: '50px',
    height: 'auto',
    width: '473.83px',
    border: '1px solid #bdbdbd',
    borderRadius: '24px',
    flexDirection: 'column',
  },
  field: {
    marginBottom: 20,
    display: 'block',
  },
  title_footer: {
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
  },
});

const Register = () => {
  const history = useHistory();
  const login = useSelector(isLogin);
  const classes = useStyles();
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [msgError, setmsgError] = useState('error');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorEmail(false);
    setErrorUsername(false);
    setErrorPassword(false);
    if (
      form.email === '' &&
      form.username === '' &&
      form.password === '' &&
      form.confirmPassword === ''
    ) {
      setErrorEmail(true);
      setErrorUsername(true);
      setErrorPassword(true);
      setmsgError('Please input all fields');
    } else if (form.email.length < 8) {
      setErrorEmail(true);
      setmsgError('Email invalid');
      console.log(form.email.length);
    } else if (form.username.length < 6) {
      setErrorUsername(true);
      setmsgError('Character must be at least 8 characters');
    } else if (form.password.length < 8) {
      setErrorPassword(true);
      setmsgError('Character must be at least 8 characters');
    } else if (form.password !== form.confirmPassword) {
      setErrorPassword(true);
      setmsgError('Password dont match');
    } else {
      const data = {
        email: form.email,
        username: form.username,
        password: form.password,
      };

      console.log(data, 'data');

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

      var urlencoded = new URLSearchParams();
      urlencoded.append('email', form.email);
      urlencoded.append('username', form.username);
      urlencoded.append('password', form.password);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
      };

      fetch(
        'https://mockinsta.herokuapp.com/api/signin/register',
        requestOptions
      )
        .then(() => history.push('/'))
        .catch((error) => console.log('error', error));
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h5">Register Form</Typography>

        <form
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          style={{ marginTop: '20px', marginBottom: '20px' }}
        >
          {errorEmail && <p className={classes.error}>{msgError}</p>}
          <TextField
            className={classes.field}
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            required
            error={errorEmail}
          />
          {errorUsername && <p className={classes.error}>{msgError}</p>}
          <TextField
            className={classes.field}
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
            required
            error={errorUsername}
          />
          {errorPassword && <p className={classes.error}>{msgError}</p>}
          <TextField
            className={classes.field}
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            required
            error={errorPassword}
          />
          {errorPassword && <p className={classes.error}>{msgError}</p>}
          <TextField
            className={classes.field}
            id="confirmPassoord"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
            required
            error={errorPassword}
          />
          <Button type="submit" variant="outlined" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
        <div>
          <Typography className={classes.title_footer}>
            Already have a account?{' '}
            <span style={{ color: '#5C5CFF' }}> Login</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Register;
