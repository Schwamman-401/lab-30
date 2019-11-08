import Request from '../components/request';

export const initialState = [];

export function reducer(requests = initialState,  action = {}) {
  const { type, payload } = action;
  switch(type) {
    case 'addRequest':
      return requests.concat(payload);
    default:
      return requests;
  }
}

export function addRequest(item) {
  return {
    type: 'addRequest',
    payload: item,
  }
}

export function newRequest(url, type, reqBody, username, password, bearerToken) {
  console.log(bearerToken);
  return dispatch => {  
    let request = new Request(url, type, reqBody, username, password, bearerToken);
    console.log(request);
    request.makeRequest()
      .then( _ => {
        dispatch(addRequest(request));
      });
  }
}

