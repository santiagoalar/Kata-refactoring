import React from 'react';
import List from './List';
import Form from './Form';
import FormList from './FormList';
import {StoreProvider} from './StoreProvider';

export const HOST_API = "http://localhost:8080/api";

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <FormList/>
    <Form />
    <List />
  </StoreProvider>
}

export default App;
