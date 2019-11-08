export const initialState = {
  url: undefined,
  type: 'GET',
  reqBody: undefined,
}

export function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch(type) {
    case 'setURL':
      return {
        ...state,
        url: payload
      }
    case 'setType':
        return {
          ...state,
          type: payload
        }
    case 'setReqBody':
        return {
          ...state,
          reqBody: payload
        }
    default:
      return state;
  }
}

export function setURL(url) {
  return {
    type: 'setURL',
    payload: url,
  }
}

export function setType(type) {
  return {
    type: 'setType',
    payload: type,
  }
}

export function setReqBody(body) {
  return {
    type: 'setReqBody',
    payload: body,
  }
}