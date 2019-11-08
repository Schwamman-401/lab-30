import React, { useState } from 'react';
import { connect } from 'react-redux';
import URL from './url';
import Headers from './headers';
import { newRequest } from '../../store/requests-reducer';
import { setURL, setType, setReqBody } from '../../store/request-form-reducer';

function Form(props) {
  const { url, type, reqBody, newRequest, setURL, setType, setReqBody } = props;

  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [bearerToken, setBearerToken] = useState(undefined);

  let updateState = async (key, value) => {
    switch (key) {
      case 'url': setURL(value);
        break;
      case 'type': setType(value);
        break;
      case 'reqBody': setReqBody(value);
        break;
      case 'username': setUsername(value);
        break;
      case 'password': setPassword(value);
        break;
      case 'bearerToken': setBearerToken(value);
        break;
      default: break;
    }
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    newRequest(url, type, reqBody);
  }

  return (
    <>
      <form _lpchecked="1" onSubmit={handleSubmit}>
        <URL 
          updateState={updateState}
          type={type}
        />
        <Headers 
          updateState={updateState}
          type={type}
        />
      </form>
    </>
  );
}

function mapStateToProps(state) {
  return {
    url: state.request.url,
    type: state.request.type,
    reqBody: state.request.reqBody,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newRequest: (url, type, reqBody) => dispatch(newRequest(url, type, reqBody)),
    setURL: (url) => dispatch(setURL(url)),
    setType: (type) => dispatch(setType(type)),
    setReqBody: (type) => dispatch(setReqBody(type)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);