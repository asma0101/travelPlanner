import { ACTIONS } from "./actions";

export const setLoggedInUser = (loggedIn:any) => ({
  type: ACTIONS.SET_LOGGED_IN,
  payload: { loggedIn },
});

export const setLoader = (loader: any) => ({
  type: ACTIONS.SET_LOADER,
  payload: {loader}
})

export const setLoggedInUserData = (loggedInUserData:any) => ({
  type: ACTIONS.SET_USER_DATA,
  payload: { loggedInUserData },
});

export const setErrorAlert = (displayAlert:boolean, alertMsg:string, isError: boolean = true) => ({
  type: ACTIONS.SET_ERROR_ALERT,
  payload: { displayAlert, alertMsg, isError },
});
