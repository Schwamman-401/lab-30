import React from 'react';
import Aside from './aside';
import Form from './form';
import Response from './response';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      requests: [],
    }
  }

  

  render() {
    return (
      <main>
        <Aside 
          requests={this.state.requests}
        />
        <section class="deck">
          <Form />
          <Response />
        </section>
      </main>
    )
  }

}

export default Main;