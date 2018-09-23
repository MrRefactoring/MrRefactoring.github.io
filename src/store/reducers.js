import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const isLoading = handleActions({
  SHOW_LOADING: () => true,
  HIDE_LOADING: () => false
}, false);

export default combineReducers({
  app: combineReducers({
    isLoading
  })
});
