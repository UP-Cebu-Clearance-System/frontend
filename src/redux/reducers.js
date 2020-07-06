import types from './types'

const initialState = {
  user: {
    token: '',
    type: '',
    isFetching: false,
    status: '',
  },
  clearances: '',
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        user: {
          isFetching: action.payload.isFetching || state.user.isFetching,
          status: action.payload.status || state.user.status,
          token: action.payload.token || state.user.token,
          type: action.payload.type || state.user.type,
        },
      }

    default:
      return {
        ...state,
      }
  }
}

export default rootReducer
