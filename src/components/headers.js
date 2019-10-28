import React from 'react';

class Headers extends React.Component {
  render() {
    return (
      <section class="deck col-2">
        <div id="body">
          <textarea placeholder="Raw JSON Body" name="requestBody" disabled=""></textarea>
        </div>          
        <div id="headers">
          <button>Headers</button>
          <div class="visible-false">
            <h2>Basic Authorization</h2>
            <input name="authusername" placeholder="Username" value=""/>
            <input name="authpassword" type="authpassword" placeholder="Password" value=""/>
          </div>
          <div class="visible-false">
            <h2>Bearer Token</h2>
            <input type="text" class="wide" name="authtoken" placeholder="Bearer Token" value=""/>
          </div>
        </div>
      </section>
    );
  }
}

export default Headers;