import { createActions } from 'redux-actions';

const identity = x => x;

export const loadingActions = createActions({
  SHOW_LOADING: identity,
  HIDE_LOADING: identity
});
