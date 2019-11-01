import React from 'react';

export default function Headers(props) {
  let isDisabled = () => {
    if (props.type === 'GET' || props.type === 'DELETE' ) {
      return true;
    } else {
      return false;
    }
  }

  let handleInput = e => {
    props.updateState('url', e.target.value)
  }

  return (
    <section className="deck col-2">
      <div id="body">
        <textarea 
          placeholder="Raw JSON Body" 
          name="requestBody" 
          disabled={isDisabled()}
          onChange={(e) => {props.updateState('reqBody', e.target.value)}}
        ></textarea>
      </div>          
      <div id="headers">
        <button>Headers</button>
        <div className="visible-false">
          <h2>Basic Authorization</h2>
          <input name="authusername" placeholder="Username" defaultValue="" onChange={handleInput}/>
          <input name="authpassword" type="authpassword" placeholder="Password" defaultValue="" onChange={handleInput}/>
        </div>
        <div className="visible-false">
          <h2>Bearer Token</h2>
          <input type="text" className="wide" name="authtoken" placeholder="Bearer Token" defaultValue="" onChange={handleInput}/>
        </div>
      </div>
    </section>
  );
}