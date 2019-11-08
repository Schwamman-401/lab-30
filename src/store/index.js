import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { reducer as requests } from './requests-reducer';

let reducer = combineReducers({
  requests
});

export default function() {
  return createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
}