import React, { useReducer, createContext } from 'react';
import reducer from './Reducer';

  const initialState = {
    todoList: { items:  [], item:  {}},
    todo:     { items:  [], item:  {}}
  };
  
  export const Store = createContext(initialState)
  
  export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  }