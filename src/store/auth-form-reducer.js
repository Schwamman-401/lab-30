export const initialState = {
  username: undefined,
  password: undefined,
  bearerToken: undefined,
}

export function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch(type) {
    case 'setUsername':
      return {
        ...state,
        username: payload
      }
    case 'setPassword':
        return {
          ...state,
          password: payload
        }
    case 'setBearerToken':
        return {
          ...state,
          bearerToken: payload
        }
    default:
      return state;
  }
}

export function setUsername(username) {
  return {
    type: 'setUsername',
    payload: username,
  }
}

export function setPassword(password) {
  return {
    type: 'setPassword',
    payload: password,
  }
}

export function setBearerToken(token) {
  return {
    type: 'setBearerToken',
    payload: token,
  }
}