import { ACTIONS } from "../Actions/actions";


const initialState = {
  users: [],
    loggedInUser: {},
  loggedIn: false,
  loader: true
};

const usersReducer = (state = initialState, action: any) => {
    console.log(state, action)
  switch (action.type) {
      case ACTIONS.SET_LOGGED_IN:
          return {
                ...state,
                loggedIn: action.payload
      };
      case ACTIONS.SET_LOADER:
          return {
                ...state,
                loader: action.payload
            };

      
    default:
      return state;
  }
};

export default usersReducer;
