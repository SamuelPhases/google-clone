import React, { useContext, createContext, useReducer, useState } from "react";

// Preparing the Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook used to pull from the data layer
export const useStateValue = () => useContext(StateContext);
