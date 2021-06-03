import React, { useContext, useRef, useState } from 'react';
import { Store, HOST_API } from './App';

const Form = () => {
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);
  
    const onAdd = (event) => {
      event.preventDefault();
  
      const request = {
        name: state.name,
        id: null,
        completed: false
      };
      onFetch("POST", "add-item", request)
    }
  
    const onEdit = (event) => {
      event.preventDefault();
  
      const request = {
        name: (state.name || item.name),
        id: item.id,
        completed: item.completed
      };
      onFetch("PUT", "update-item", request)
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
  
    return <form ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="¿Qué piensas hacer hoy?"
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value })
        }}  ></input>
      {item.id && <button onClick={onEdit}>Actualizar</button>}
      {!item.id && <button onClick={onAdd}>Crear</button>}
    </form>
  }
  
export default Form;