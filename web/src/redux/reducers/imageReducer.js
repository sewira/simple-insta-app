import { IMAGE, LOADING } from '../types';

const initialState = {
  image: [],
  loading: false,
  isSuccess: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case IMAGE.GET_IMAGE:
      const data = payload.reverse();

      return {
        ...state,
        image: data,
        loading: false,
        isSuccess: false,
      };

    case IMAGE.POST_IMAGE:
      const newImages = state.image.push(payload);

      return {
        ...state,
        image: newImages,
        loading: false,
        isSuccess: true,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

//selector

export const getAllImages = (state) => state.image.image;
export const isLoading = (state) => state.image.loading;
export const isSuccess = (state) => state.image.isSuccess;
