import React, { useState } from 'react';
import { setURL, setType } from '../../store/request-form-reducer';
import { connect } from 'react-redux';


function URL(props) {
  const { type } = props;
  const { setURL, setType } = props;

  let updateState = async (key, value) => {
    switch (key) {
      case 'url': setURL(value);
        break;
      case 'type': setType(value);
        break;
      default: break;
    }
  }

  let handleInput = e => {
    updateState('url', e.target.value)
  }

  let handleRadio = e => {
    console.log(e.target.value);
    updateState('type', e.target.value);
  }

  return (
    <section>
      <select onChange={handleRadio}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input type="text" className="wide" name="url" placeholder="URL" onChange={handleInput}></input>
      <label><button className="submitBtn" type="submit">Go!</button></label>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    type: state.request.type,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setURL: (url) => dispatch(setURL(url)),
    setType: (type) => dispatch(setType(type)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(URL);