import React from 'react';

export default function URL(props) {

  let handleInput = e => {
    props.updateState('url', e.target.value)
  }

  let handleRadio = async type => {
    props.updateState('type', type)
  }

  return (
    <section>
      <input type="text" className="wide" name="url" placeholder="URL" onChange={handleInput}></input>
      <div id="methods">
        <label type="radio" name="method" value="get" onClick={() => handleRadio('GET')}><span>GET</span></label>
        <label type="radio" name="method" value="post" onClick={() => handleRadio('POST')}><span>POST</span></label>
        <label type="radio" name="method" value="put" onClick={() => handleRadio('PUT')}><span>PUT</span></label>
        <label type="radio" name="method" value="patch" onClick={() => handleRadio('PATCH')}><span>PATCH</span></label>
        <label type="radio" name="method" value="delete" onClick={() => handleRadio('DELETE')}><span>DELETE</span></label>
        <label><button type="submit">Go!</button></label>
      </div>
    </section>
  );
}