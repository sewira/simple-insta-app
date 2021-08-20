import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from '../../redux/reducers/userReducer';

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

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const login = useSelector(isLogin);
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [msgError, setmsgError] = useState('error');
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  if (login) {
    return <Redirect to="/home" />;
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorUsername(false);
    setErrorPassword(false);
    if (form.username === '' && form.password === '') {
      setErrorUsername(true);
      setErrorPassword(true);
      setmsgError('Please input all fields');
    } else if (form.username.length < 6) {
      setErrorUsername(true);
      setmsgError('Character must be at least 6 characters');
    } else if (form.password.length < 6) {
      setErrorPassword(true);
      setmsgError('Character must be at least 6 characters');
    } else {
      console.log('login');
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        username: form.username,
        password: form.password,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('https://mockinsta.herokuapp.com/api/signin/', requestOptions)
        .then((response) => response.json())
        .then((result) => dispatch({ type: 'user/login', payload: result }))
        .then(() => history.push('/home'))
        .catch((error) => console.log('error', error));
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h5">Login Form</Typography>

        <form
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          style={{ marginTop: '20px', marginBottom: '20px' }}
        >
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

          <Button type="submit" variant="outlined" color="primary" fullWidth>
            Sign in
          </Button>
        </form>
        <div>
          <Typography className={classes.title_footer}>
            Dont have a account?
            <span style={{ color: '#5C5CFF' }}> Register here</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
