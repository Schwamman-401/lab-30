import React from 'react';
import {useState} from 'react';
import Aside from './aside';
import Form from './form';
import Response from './response';
import Request from './request';


export default function Main() {
  let [requests, setRequests] = useState([]);

  let newRequest = async (url, type, reqBody) => {
    console.log(url, type, reqBody);
    let request = new Request(url, type, reqBody);
    await request.makeRequest();
    let newRequests = requests.concat(request);
    console.log(newRequests)
    setRequests(newRequests);
  }

  return (
    <main>
      <Aside 
        requests={requests}
      />
      <section className="deck">
        <Form 
          newRequest={newRequest}
        />
        <Response 
          lastRequest={requests[requests.length - 1]}
        />
      </section>
    </main>
  )
}