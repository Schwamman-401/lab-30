import React from 'react';
import ReactJson from 'react-json-view'

export default function Response(props){


  if (!props.lastRequest) {
    return (<div id="json"></div>
    );
  }

  if (props.lastRequest.error) {
    return (<div id="json">{props.lastRequest.error}</div>
    );
  }

  return (
    <div id="json">
      <ReactJson 
        src={props.lastRequest.response}
      />
    </div>
  );
}
