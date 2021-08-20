import axios from 'axios';
import { IMAGE, LOADING } from '../types';

export const fetchImage = () => async (dispatch) => {
  dispatch(setLoading());

  const config = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWU2MmM5MjA4YmExNTUxZDI1YTQ2YyIsInNlc3Npb25faWQiOiJhYjk4ZDI5Yy1iOGNiLTRlYTctYjM3OS1hNzY5ZjQ5ZmZjODgiLCJpYXQiOjE2MjkzODQ1NTh9.MTI-LUJT1x8SPKmu4Ebfe7_wl0yyw2_sgDXDbUTritw',
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
  try {
    const res = await axios.post(
      `https://mockinsta.herokuapp.com/api/upload/611cebabbf525f601247c85c`,
      data
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
