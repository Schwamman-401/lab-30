import React from 'react';
import { connect } from 'react-redux';
import History from './history';
import Form from './form/form';
import Response from './response';

function Main(props) {
  const { requests } = props;
  let lastRequest = requests[0];

  return (
    <main>
      <History 
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