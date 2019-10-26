import React from 'react';
import URL from './url';
import Headers from './headers';

class Form extends React.Component {
  render() {
    return (
      <>
        <form _lpchecked="1">
          <URL />
          <Headers />
        </form>
      </>
    );
  }
}

export default Form;