import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { LOADING } from '../types';

export const userLogout = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  const userId = localStorage.getItem('userId');

  try {
    const res = await axios.get(
      `https://mockinsta.herokuapp.com/api/signin/logout/${userId}`,
      config
    );

    if (res.status === 200) {
      dispatch({ type: 'user/logout', payload: '' });
      return <Redirect to="/" />;
    }
  } catch (error) {
    throw error;
  }
};
