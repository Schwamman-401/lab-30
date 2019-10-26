import React from 'react';

class URL extends React.Component {
  render() {
    return (
      <section>
        <input type="text" class="wide" name="url" placeholder="URL"></input>
        <div id="methods">
          <label type="radio" name="method" value="get"><span>GET</span></label>
          <label type="radio" name="method" value="post"><span>POST</span></label>
          <label type="radio" name="method" value="put"><span>PUT</span></label>
          <label type="radio" name="method" value="patch"><span>PATCH</span></label>
          <label type="radio" name="method" value="delete"><span>DELETE</span></label>
          <laber><button type="submit">Go!</button></laber>
        </div>
      </section>
    );
  }
}

export default URL;