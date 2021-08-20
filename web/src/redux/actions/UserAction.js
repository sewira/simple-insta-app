import axios from 'axios';
import { LOADING } from '../types';

export const userRegister = (data) => async (dispatch) => {
  dispatch(setLoading());

  const res = await axios.post(
    'https://mockinsta.herokuapp.com/api/signin/register',
    data
  );

  if (res.statusCode === 200) {
    dispatch({ type: 'regis/sukses' });
  }
};

const setLoading = () => {
  return {
    type: LOADING,
  };
};
