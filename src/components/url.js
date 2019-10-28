import React from 'react';

class URL extends React.Component {

  handleInput = e => {
    this.props.updateState('url', e.target.value)
  }

  handleRadio = async type => {
    this.props.updateState('type', type)
  }

  render() {
    return (
      <section>
        <input type="text" className="wide" name="url" placeholder="URL" onChange={this.handleInput}></input>
        <div id="methods">
          <label type="radio" name="method" value="get" onClick={() => this.handleRadio('GET')}><span>GET</span></label>
          <label type="radio" name="method" value="post" onClick={() => this.handleRadio('POST')}><span>POST</span></label>
          <label type="radio" name="method" value="put" onClick={() => this.handleRadio('PUT')}><span>PUT</span></label>
          <label type="radio" name="method" value="patch" onClick={() => this.handleRadio('PATCH')}><span>PATCH</span></label>
          <label type="radio" name="method" value="delete" onClick={() => this.handleRadio('DELETE')}><span>DELETE</span></label>
          <label><button type="submit">Go!</button></label>
        </div>
      </section>
    );
  }
}

export default URL;