import React from 'react';

export default function Aside(props) {
  return(
    <aside>
      <h2>History</h2>
      <ul id="history">
        {props.requests
          .map((req, i) => (
            <p key={i}>{`${req.type} ${req.url}`}</p>
          ))
        }
      </ul>
    </aside>
  );
}
