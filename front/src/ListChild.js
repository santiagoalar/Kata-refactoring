import React, { useContext, useEffect } from 'react';
import {HOST_API } from './App';
import {Store} from './StoreProvider';
import FormChild from './FormChild'

const List = (props) => {
  const { dispatch } = useContext(Store);
  const currentList = props.items;
/*
  useEffect(() => {
    fetch(HOST_API + "/todosList")
      .then(response => response.json())
      .then((items) => {
        dispatch({ type: "update-todoList-list", items })
      })
  }, [dispatch]);*/

  console.log(currentList)
  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todoList", {
      method: "DELETE"
    }).then((items) => {
      dispatch({ type: "delete-item", id })
    })
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo })
  };

  return <div>
        {currentList.map((todo) => {
          return <div key={todo.id}>
            {todo.id}            {todo.name}
            <button onClick={() => onDelete(todo.id)}>Eliminar</button>
            <button onClick={() => onEdit(todo)}>Editar</button>
          </div>
          
        })}
  </div>
}

export default List;