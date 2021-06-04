import React, { useContext, useRef, useState } from 'react';
import FormToDo from './Form';
import { HOST_API } from './App';
import {Store} from './StoreProvider';

const Form = () => {
    const formRef = useRef(null);
    const { dispatch, state: { listTodo } } = useContext(Store);
    const item = listTodo.item;
    const [state, setState] = useState(item);
  
    const onAdd = (event) => {
      event.preventDefault();
  
      const request = {
        name: state.name,
        id: null,
      };
      onFetch("POST", "add-list", request)
    }
  
    const onEdit = (event) => {
      event.preventDefault();
  
      const request = {
        name: (state.name || item.name),
        id: item.id,
        completed: item.completed
      };
      onFetch("PUT", "update-list", request)
    }

    function onFetch(item_method, item_type, request){
        fetch(HOST_API + "/todo", {
            method: item_method,
            body: JSON.stringify(request),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then((todo) => {
              dispatch({ type: item_type, item: todo });
              setState({ name: "" });
              formRef.current.reset();
            });
    }
  
    return <div ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="ToDo list"
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value })
        }}  ></input>
      {item.id && <button onClick={onEdit}>Update list</button>}
      {!item.id && <button onClick={onAdd}>Create new list</button>}
      <FormToDo/>
    </div>
  }
  
export default Form;