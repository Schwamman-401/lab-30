import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { reducer as requests } from './requests-reducer';
import { reducer as request } from './request-form-reducer';
import { reducer as auth } from './auth-form-reducer';

let reducer = combineReducers({
  requests,
  request,
  auth
});

export default function() {
  return createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
}