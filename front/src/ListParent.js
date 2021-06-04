import React, { useContext, useEffect } from 'react';
import {HOST_API } from './App';
import {Store} from './StoreProvider';

const List = () => {
    const { dispatch, state: { listTodo } } = useContext(Store);
    const currentList = listTodo.elements;
  
    useEffect(() => {
      fetch(HOST_API + "/todosList")
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list", list })
        })
    }, [dispatch]);
  
  
    const onDelete = (id) => {
      fetch(HOST_API + "/" + id + "/todo", {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-item", id })
      })
    };
  
    const onEdit = (todo) => {
      dispatch({ type: "edit-item", item: todo })
    };
  
    return <div>
      <table >
        <thead>
          <tr>
            <td>ID</td>
            <td>Tarea</td>
            <td>¿Completado?</td>
          </tr>
        </thead>
        <tbody>
          {currentList.map((listTodo) => {
            return <tr key={listTodo.id}>
              <td>{listTodo.id}</td>
              <td>{listTodo.name}</td>
              <td><button onClick={() => onDelete(listTodo.id)}>Eliminar</button></td>
              <td><button onClick={() => onEdit(listTodo)}>Editar</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }
 

export default List;