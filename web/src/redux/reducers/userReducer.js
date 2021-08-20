import { USER } from '../types';

const store = window.localStorage;
const token = store.getItem('token');

const initialState = {
  isLogin: token ? true : false,
  //   isLogin: true,
  loading: false,
  regisSukses: false,
  loginSukses: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'regis/sukses':
      return {
        ...state,
        loading: false,
        regisSukses: true,
      };

    case 'login/sukses':
      return {
        ...state,
        loading: false,
        loginSukses: true,
      };

    default:
      return state;
  }
};

//selector

export const isLogin = (state) => state.user.isLogin;
