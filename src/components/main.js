import React from 'react';
import Aside from './aside';
import Form from './form';
import Response from './response';
import Request from './request';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      requests: [],
    }
  }

  newRequest = async (URL, type, reqBody) => {
    console.log(URL, type, reqBody);
    let request = new Request(URL, type, reqBody);
    await request.makeRequest();
    let newRequests = this.state.requests.concat(request);
    this.setState({ requests: newRequests });
  }

  

  render() {
    return (
      <main>
        <Aside 
          requests={this.state.requests}
        />
        <section class="deck">
          <Form 
            newRequest={this.newRequest}
          />
          <Response 
            lastRequest={this.state.requests[this.state.requests.length - 1]}
          />
        </section>
      </main>
    )
  }

}

export default Main;