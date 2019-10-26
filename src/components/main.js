import React from 'react';
import Aside from './aside';
import Form from './form';
import Response from './response';

class Main extends React.Component {

  render() {
    return (
      <main>
        <Aside />
        <section class="deck">
          <Form />
          <Response />
        </section>
      </main>
    )
  }

}

export default Main;