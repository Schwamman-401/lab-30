import React from 'react';

class Headers extends React.Component {
  render() {
    return (
      <section className="deck col-2">
        <div id="body">
          <textarea placeholder="Raw JSON Body" name="requestBody" disabled=""></textarea>
        </div>          
        <div id="headers">
          <button>Headers</button>
          <div className="visible-false">
            <h2>Basic Authorization</h2>
            <input name="authusername" placeholder="Username" defaultValue=""/>
            <input name="authpassword" type="authpassword" placeholder="Password" defaultValue=""/>
          </div>
          <div className="visible-false">
            <h2>Bearer Token</h2>
            <input type="text" className="wide" name="authtoken" placeholder="Bearer Token" defaultValue=""/>
          </div>
        </div>
      </section>
    );
  }
}

export default Headers;