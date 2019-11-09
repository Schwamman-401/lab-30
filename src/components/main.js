import React from 'react';
import { connect } from 'react-redux';
import Aside from './aside';
import Form from './form/form';
import Response from './response';

function Main(props) {
  const { requests } = props;
  let lastRequest = requests[requests.length - 1];

  return (
    <main>
      <Aside 
        requests={requests}
      />
      <section className="deck">
        <Form 
        />
        <Response 
          lastRequest={lastRequest}
        />
      </section>
    </main>
  )
}

export default connect(
  state => ({ requests: state.requests }),
  (dispatch) => {}
)(Main);