import KEYS from 'utils/keys'
import { loginRequest, loginSuccess, loginFailure } from './actions'

export function login(id, password, type) {
  return function (dispatch) {
    dispatch(loginRequest())

    return fetch(`${KEYS.API_ENDPOINT}/login/${type}`, {
      method: 'POST',
      body: JSON.stringify({
        id,
        password,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log(response)
          dispatch(loginFailure())
        } else {
          response.text().then((token) => dispatch(loginSuccess(token)))
        }
      })
      .catch((error) => {
        console.error(error)
        dispatch(loginFailure())
      })
  }
}
