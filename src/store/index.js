import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { reducer as requests } from './requests-reducer';
import { reducer as request } from './request-form-reducer';

let reducer = combineReducers({
  requests,
  request
});

export default function() {
  return createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
}