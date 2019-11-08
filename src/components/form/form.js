import React, { useState } from 'react';
import { connect } from 'react-redux';
import URL from './url';
import Headers from './headers';
import { newRequest } from '../../store/requests-reducer';
import { setURL, setType, setReqBody } from '../../store/request-form-reducer';
import { setUsername, setPassword, setBearerToken } from '../../store/auth-form-reducer';

function Form(props) {
  const { url, type, reqBody, username, password, bearerToken } = props;
  const { newRequest, setURL, setType, setReqBody, setUsername, setPassword, setBearerToken } = props;

  let updateState = async (key, value) => {
    switch (key) {
      case 'url': setURL(value);
        break;
      case 'type': setType(value);
        break;
      case 'reqBody': setReqBody(value);
        break;
      case 'authusername': setUsername(value);
        break;
      case 'authpassword': setPassword(value);
        break;
      case 'authtoken': setBearerToken(value);
        break;
      default: break;
    }
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(bearerToken);
    newRequest(url, type, reqBody, username, password, bearerToken);
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
    username: state.auth.username,
    password: state.auth.password,
    bearerToken: state.auth.bearerToken,
  };
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
  mapStateToProps,
  mapDispatchToProps
)(Form);