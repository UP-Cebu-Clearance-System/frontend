import types from './types'

export function loginRequest(type) {
  return {
    type: types.login,
    payload: {
      isFetching: true,
      type,
    },
  }
}

export function loginSuccess(token) {
  return {
    type: types.login,
    payload: {
      isFetching: false,
      status: 'success',
      token,
    },
  }
}

export function loginFailure() {
  return {
    type: types.login,
    payload: {
      isFetching: false,
      status: 'fail',
    },
  }
}
