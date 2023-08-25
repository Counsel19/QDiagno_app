import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";
import * as ACTIONS from "./actions";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

export const initialState = {
  user: user || null,
  token: token || null,
  isLoading: false,
  chatRepo: [
    {
      createdBy: "model",
      msg: "Hope you are having a good time. Kindly describe your symptoms so I can assist with the diagnosis",
    },
    // {
    //   createdBy: "user",
    //   msg: "I have been vomiting since yesterday and my temperature has risen intensly. I am also feeling really fatigue with high fever. My abdomen has been given me some pain coupled with a severe stomach ache. Help me with a diagnosis!",
    // },
    // {
    //   createdBy: "model",
    //   msg: "Based on the sypmtoms you provided, the most likely disease you might be suffering is Typhoid. Reasons because the most prominent symptoms of typhoid are  chills, vomiting, fatigue,	high_fever,	nausea constipation, abdominal_pain	and belly_pain. And you seem to express these symptoms. You can also consider visiting the closest medical center for examination",
    // },
  ],
  errorMessage: "",
  successMessage: "",
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Instance Setup
  const authFetch = axios.create({
    baseURL: "/api/",
  });

  const getGreetings = async () => {
    try {
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const login = async (payload) => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const res = await axios.post(`/api/auth/login`, payload);
      const { token, user } = res.data;

      dispatch({
        type: ACTIONS.LOGIN,
        payload: {
          user,
          token,
        },
      });

      addUserToLocalStorage({ user, token });
      getGreetings();
      dispatch({ type: ACTIONS.FETCH_STOP });
      return user;
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const register = async (payload) => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const res = await axios.post(`/api/auth/register`, payload);
      const { token, user } = res.data;

      dispatch({
        type: ACTIONS.LOGIN,
        payload: {
          user,
          token,
        },
      });

      addUserToLocalStorage({ user, token });
      getGreetings();
      dispatch({ type: ACTIONS.FETCH_STOP });
      return user;
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    removeUserFromLocalStorage();
  };

  const clearMessage = () => {
    dispatch({ type: ACTIONS.CLEAR_MESSAGE });
  };

  const addChat = async (msg, createdBy) => {
    if (msg.length !== 0) {
      dispatch({
        type: ACTIONS.ADD_CHAT,
        payload: { createdBy, msg },
      });
    }
    if (createdBy === "user") {
      requestDiagnosis(msg);
    }
  };

  const requestDiagnosis = async (msg) => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const res = await authFetch.post(
        "https://qdiag-3d9775a7e4e6.herokuapp.com/api/predict-disease",
        { userInput: msg }
      );

      if (res) {
        addChat(res.data.predicted_disease, "model");
      }
      dispatch({ type: ACTIONS.FETCH_STOP });
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });
      console.log(error, "error");
      // dispatch({
      //   type: ACTIONS.SET_ERROR,
      //   payload: { msg: error.response.data.msg },
      // });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        login,
        register,
        logout,
        getGreetings,
        addChat,
        requestDiagnosis,
        clearMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
