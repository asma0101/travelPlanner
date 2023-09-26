import { ACTIONS } from "../Actions/actions";


const initialState = {
  loggedIn: true,
  loader: true,
  loggedInUserData: {},
  alertData: {displayAlert: false, alertMsg: '', isError: true}

};

const usersReducer = (state = initialState, action: any) => {
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
     case ACTIONS.SET_USER_DATA:
          return {
                ...state,
                loggedInUserData: action.payload
      };
    case ACTIONS.SET_ERROR_ALERT:
          return {
                ...state,
                alertData: action.payload
            };

      
    default:
      return state;
  }
};

export default usersReducer;
