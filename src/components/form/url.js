import React from 'react';
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

  let isSelected = selectedType => {
    console.log(selectedType);
    if (selectedType === type) {
      console.log('Is selected type')
      return 'selected';
    }
    return false;
  }

  return (
    <section>
      <select onChange={handleRadio}>
        <option value="GET" selected={isSelected('GET')}>GET</option>
        <option value="POST" selected={isSelected('POST')}>POST</option>
        <option value="PUT" selected={isSelected('PUT')}>PUT</option>
        <option value="PATCH" selected={isSelected('PATCH')}>PATCH</option>
        <option value="DELETE" selected={isSelected('DELETE')}>DELETE</option>
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