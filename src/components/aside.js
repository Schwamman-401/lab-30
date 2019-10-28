import React from 'react';

class Aside extends React.Component {
  render() {
    return(
      <aside>
        <h2>History</h2>
        <ul id="history">
          {this.props.requests
            .map(req => (
              <p>{req.url}</p>
            ))
          }
        </ul>
      </aside>
    );
  }
}

export default Aside;