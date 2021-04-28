import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  login: false,
};

const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "login":
      return {
        ...state,
        login: true,
      };
    case "logout":
      return {
        ...state,
        login: false,
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
