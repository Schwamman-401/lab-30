import React from 'react';
import { connect } from 'react-redux';
import URL from './url';
import Headers from './headers';
import { newRequest } from '../../store/requests-reducer';

function Form(props) {
  const { url, type, reqBody, username, password, bearerToken } = props;
  const { newRequest } = props;

  let handleSubmit = (e) => {
    e.preventDefault();
    newRequest(url, type, reqBody, username, password, bearerToken);
  }

  return (
    <>
      <form _lpchecked="1" onSubmit={handleSubmit}>
        <URL 
          type={type}
        />
        <Headers 
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);