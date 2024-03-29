import React from 'react';
import { connect } from 'react-redux';
import { setURL, setType, setReqBody } from '../../store/request-form-reducer';
import { setUsername, setPassword, setBearerToken } from '../../store/auth-form-reducer';

function Headers(props) {
  const { reqBody, username, password, bearerToken } = props;
  const { setURL, setType, setReqBody, setUsername, setPassword, setBearerToken } = props;

  let isDisabled = () => {
    if (props.type === 'GET' || props.type === 'DELETE' ) {
      return true;
    } else {
      return false;
    }
  }

  let updateState = async (key, value) => {
    switch (key) {
      case 'url': setURL(value);
        break;
      case 'type': setType(value);
        break;
      case 'requestBody': setReqBody(value);
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

  let setValue = (value) => {
    if (value) {
      return value;
    }
    return undefined;
  }

  let handleInput = e => {
    updateState(e.target.name, e.target.value)
  }

  return (
    <section className="deck col-2">
      <div id="body">
        <textarea 
          placeholder="Raw JSON Body" 
          name="requestBody" 
          disabled={isDisabled()}
          onChange={handleInput}
          value={setValue(reqBody)}
        ></textarea>
      </div>          
      <div id="headers">
        <div className="visible-false">
          <h2>Basic Authorization</h2>
          <input 
            className="authInput" 
            name="authusername" 
            placeholder="Username" 
            value={setValue(username)}
            onChange={handleInput}/>
          <br/>
          <input 
            className="authInput" 
            name="authpassword" 
            type="authpassword" 
            placeholder="Password" 
            value={setValue(password)}
            onChange={handleInput}/>
        </div>
        <div className="visible-false">
          <h2>Bearer Token</h2>
          <input 
            type="text" 
            className="authInput"
            name="authtoken" 
            placeholder="Bearer Token" 
            value={setValue(bearerToken)}
            onChange={handleInput}/>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    reqBody: state.request.reqBody,
    username: state.auth.username,
    password: state.auth.password,
    bearerToken: state.auth.bearerToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
  )(Headers);