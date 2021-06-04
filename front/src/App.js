import React from 'react';
/*import List from './List';*/
/*import Form from './Form';*/
import ListParent from './ListParent';
import FormParent from './FormParent';
import {StoreProvider} from './StoreProvider';

export const HOST_API = "http://localhost:8080/api";

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <FormParent/>
    <ListParent/>
  </StoreProvider>
}

/*function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}*/

export default App;
