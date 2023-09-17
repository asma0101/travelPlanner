import { ACTIONS } from "./actions";

export const setLoggedInUser = (loggedIn:any) => ({
  type: ACTIONS.SET_LOGGED_IN,
  payload: { loggedIn },
});

export const setLoader = (loader: any) => ({
  type: ACTIONS.SET_LOADER,
  payload: {loader}
})
