import axios from 'axios';
import { IMAGE, LOADING } from '../types';

export const fetchImage = () => async (dispatch) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.get(
      `https://mockinsta.herokuapp.com/api/posts`,
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
  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const res = await axios.post(
      `https://mockinsta.herokuapp.com/api/upload`,
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
