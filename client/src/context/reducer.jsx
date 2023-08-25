import * as ACTIONS from "./actions";
import { initialState } from "./AppContext";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload.msg,
      };
    case ACTIONS.ADD_CHAT:
      return {
        ...state,
        chatRepo: [
          ...state.chatRepo,
          { createdBy: action.payload.createdBy, msg: action.payload.msg },
        ],
      };
    case ACTIONS.SUCCESS_MSG:
      return {
        ...state,
        successMessage: action.payload.msg,
      };
    case ACTIONS.FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.FETCH_STOP:
      return {
        ...state,
        isLoading: false,
      };
    case ACTIONS.INIT_STATE:
      return {
        ...initialState,
      };

    case ACTIONS.CLEAR_MESSAGE:
      return {
        ...state,
        errorMessage: null,
        successMessage: null,
      };

    default:
      return state;
  }
}
