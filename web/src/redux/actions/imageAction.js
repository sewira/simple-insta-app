import axios from 'axios';
import { IMAGE, LOADING } from '../types';

export const fetchImage = () => async (dispatch, getState) => {
  dispatch(setLoading());

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.get(
      `https://mockinsta.herokuapp.com/api/posts/${userId}`,
      config
    );

    if (res.status === 200) {
      dispatch({ type: IMAGE.GET_IMAGE, payload: res.data.data });
    }
  } catch (error) {
    throw error;
  }
};

export const postImage = (data) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.post(
      `https://mockinsta.herokuapp.com/api/upload/${userId}`,
      data,
      config
    );

    if (res.status === 200) {
      window.location.reload();
    }
  } catch (error) {
    throw error;
  }
};

const setLoading = () => {
  return {
    type: LOADING,
  };
};
