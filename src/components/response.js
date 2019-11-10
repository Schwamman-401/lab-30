import React from 'react';
import ReactJson from 'react-json-view';

export default function Response(props){
  const { lastRequest } = props;

  let response = {};
  if (lastRequest && lastRequest.response) {
    response = lastRequest.response.body ? lastRequest.response.body: lastRequest.response;
  } else if (lastRequest && lastRequest.error) {
    response = lastRequest.error;
  }
  console.log(response);

  if (!props.lastRequest) {
    return (<div id="json"></div>
    );
  }

  if (props.lastRequest.error) {
    return (<div id="json">{response}</div>
    );
  }

  return (
    <div id="json">
      <ReactJson 
        src={response}
      />
    </div>
  );
}
