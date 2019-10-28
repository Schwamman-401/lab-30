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

  newRequest = async (url, type, reqBody) => {
    console.log(url, type, reqBody);
    let request = new Request(url, type, reqBody);
    await request.makeRequest();
    this.setState(state => ({
      requests: state.requests.concat(request),
    }));
  }

  

  render() {
    return (
      <main>
        <Aside 
          requests={this.state.requests}
        />
        <section className="deck">
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