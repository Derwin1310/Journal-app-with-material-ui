import { loginWithEmail, signInWithEmail, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./"

export const chekingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const resp = await signInWithGoogle()
    if(!resp.ok) return dispatch(logout(resp.errorMessage))

    dispatch(login(resp))
  }
}

export const startCreatingUserWithEmail = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const { ok, uid, photoURL, errorMessage } = await signInWithEmail({ email, password, displayName })

    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startLoginWithEmail = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const resp = await loginWithEmail({ email, password })
    console.log(resp);
    if(!resp.ok) return dispatch(logout(resp.errorMessage))

    dispatch(login(resp))
  }
}