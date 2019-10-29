import React from 'react';
import URL from './url';
import Headers from './headers';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: undefined,
      type: 'GET',
      reqBody: undefined,
    }
  }

  updateState = async (key, value) => {
    let obj = {};
    obj[key] = value;
    console.log(obj);
    await this.setState(obj)
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newRequest(this.state.url, this.state.type, this.state.reqBody);
  }

  render() {
    return (
      <>
        <form _lpchecked="1" onSubmit={this.handleSubmit}>
          <URL 
            updateState={this.updateState}
          />
          <Headers 
            updateState={this.updateState}
            type={this.state.type}
          />
        </form>
      </>
    );
  }
}

export default Form;