import React, { useContext, useRef, useState } from 'react';
//import ListParent from './ListParent';
import { HOST_API } from './App';
import {Store} from './StoreProvider';

const Form = () => {
  const formRef = useRef(null);
  const { dispatch, state: { todoList } } = useContext(Store);
  const item = todoList.item;
  const [state, setState] = useState(item);

  /** Create - Working */
  const onAdd = (event) => {
    event.preventDefault();
    const request = {
      name: state.name,
      id: null,
      completed: false
    };
    fetch(HOST_API + "/todoList", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todoList) => {
        dispatch({ type: "add-todoList-item", item: todoList });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  /** Update */
  const onEdit = (event) => {
    event.preventDefault();
    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted
    };

    fetch(HOST_API + "/todoList", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todoList) => {
        dispatch({ type: "update-todoList-item", item: todoList });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  return <form ref={formRef}>
    <input
      type="text"
      name="name"
      placeholder="What's your plan for today?"
      defaultValue={item.name}
      onChange={(event) => {
        setState({ ...state, name: event.target.value })
      }}  ></input>
    {item.id && <button onClick={onEdit}>Update plan</button>}
    {!item.id && <button onClick={onAdd}>Add plan</button>}
  </form>
}


export default Form;

  
