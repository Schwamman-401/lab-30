import React from 'react';
import { connect } from 'react-redux';
import { newRequest } from '../store/requests-reducer';
import { setURL, setType, setReqBody } from '../store/request-form-reducer';
import { setUsername, setPassword, setBearerToken } from '../store/auth-form-reducer';

function Aside(props) {
  let { requests } = props;
  let { newRequest, setURL, setType, setReqBody, setUsername, setPassword, setBearerToken } = props;

  let handleClick = (url, type, reqBody, username, password, bearerToken) => {
    console.log(url);
    setURL(url);
    setType(type);
    setReqBody(reqBody);
    setUsername(username);
    setPassword(password);
    setBearerToken(bearerToken);
    newRequest(url, type, reqBody, username, password, bearerToken);
  }

  let formatURL = (url) => {
    if (url) {
      let urlObj = new URL(url);
      console.log(urlObj.pathname);
      return urlObj;
    }

    return 'Undefined';
  }

  return(
    <aside>
      <h2>History</h2>
      <ul id="history">
        {requests
          .map((req, i) => (
            <button 
              className="historyButton noselect" 
              key={i} 
              name={i} 
              onClick={() => {handleClick(req.url, req.type, req.reqBody, req.username, req.password, req.bearerToken)}}
            >
              <div>{req.type} {formatURL(req.url).pathname}</div>
              <div>{formatURL(req.url).hostname}</div>
            </button>
          ))
        }
      </ul>
    </aside>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    newRequest: (...args) => dispatch(newRequest(...args)),
    setURL: (url) => dispatch(setURL(url)),
    setType: (type) => dispatch(setType(type)),
    setReqBody: (type) => dispatch(setReqBody(type)),
    setUsername: (username) => dispatch(setUsername(username)),
    setPassword: (password) => dispatch(setPassword(password)),
    setBearerToken: (token) => dispatch(setBearerToken(token)),
  }
}

export default connect(
  (dispatch) => {},
  mapDispatchToProps
)(Aside);
