import React from 'react';

class Response extends React.Component {

  renderResponse = () => {
    if(this.props.lastRequest) {
      console.log(this.props.lastRequest.response);
      return this.props.lastRequest.response;
    } else {
      console.log('No Requests!')
      return '';
    }
  }

  render() {
    return (
      <div id="json">
        <p>{this.renderResponse()}</p>
      </div>
    );
  }
}

export default Response;