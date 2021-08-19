import axios from 'axios';
import { IMAGE, LOADING } from '../types';

export const fetchImage = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const res = await axios.post(
      `https://mockinsta.herokuapp.com/api/posts/611cebabbf525f601247c85c`,
      {}
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

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
