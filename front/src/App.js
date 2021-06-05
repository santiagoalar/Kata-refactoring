import React from 'react';
import { StoreProvider } from './StoreProvider';
import FormParent from './FormParent';
import ListParent from './ListParent';

export const HOST_API = "http://localhost:8080/api";


function App() {
    return <StoreProvider>
      <h3>To-Do List</h3>
        <FormParent />
        <ListParent />

    </StoreProvider>
}

export default App;
