import React from 'react';
import { connect } from 'react-redux';
import { newRequest } from '../store/requests-reducer';

function Aside(props) {
  let { requests } = props;
  let { newRequest } = props;

  let handleClick = (url, type, reqBody, username, password, bearerToken) => {
    console.log(url);
    newRequest(url, type, reqBody, username, password, bearerToken);
  }

  let formatURL = (url) => {
    let urlObj = new URL(url);
    console.log(urlObj.pathname);
    return urlObj;
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
  }
}

export default connect(
  (dispatch) => {},
  mapDispatchToProps
)(Aside);
