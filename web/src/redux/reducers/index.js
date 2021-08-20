import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  image: imageReducer,
  user: userReducer,
});
