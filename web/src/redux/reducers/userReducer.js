const initialState = {
  isLogin: false,
  userId: '',
  token: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'user/login':
      const { token, data } = payload;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', data.userId);
      return {
        ...state,
        isLogin: true,
        userId: data.userId,
        token: token,
      };

    case 'user/logout':
      localStorage.clear();
      return {
        ...state,
        isLogin: false,
        userId: '',
        token: '',
      };

    default:
      return state;
  }
};

//selector

export const isLogin = (state) => state.user.isLogin;
