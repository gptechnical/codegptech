import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";


const AppContext = React.createContext();


const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Gourav Prajapati",
        image: "./images/hero1.png",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Gourav Technical",
        image: "./images/about1.svg",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage}}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
