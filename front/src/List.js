import React, { useContext, useEffect } from 'react';
import {HOST_API } from './App';
import {Store} from './StoreProvider';

const List = () => {
  const { dispatch, state: { todo } } = useContext(Store);
  const currentList = todo.items;

  useEffect(() => {
    fetch(HOST_API + "/todos")
      .then(response => response.json())
      .then((items) => {
        dispatch({ type: "update-list", items })
      })
  }, [dispatch]);


  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE"
    }).then((items) => {
      dispatch({ type: "delete-item", id })
    })
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo })
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked
    };
    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
      });
  };

  const decorationDone = {
    textDecoration: 'line-through'
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
        {currentList.map((todo) => {
          return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
            <td><button onClick={() => onDelete(todo.id)}>Eliminar</button></td>
            <td><button onClick={() => onEdit(todo)}>Editar</button></td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}


/*const List = (props) => {
    const { dispatch } = useContext(Store);
    const currentItem = props.ToDoList;
    console.log(currentItem);
    useEffect(() => {
      fetch(HOST_API + "/todos")
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
  
    const onChange = (event, todo) => {
      const request = {
        name: todo.name,
        id: todo.id,
        completed: event.target.checked
      };
      fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
        });
    };
  
    const decorationDone = {
      textDecoration: 'line-through'
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
          {currentItem.length === 0 && <div>Ups ...No item to display!</div>}
          {currentItem.map((todo) => {
            return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
              {console.log(todo)}
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
              <td><button onClick={() => onDelete(todo.id)}>Eliminar</button></td>
              <td><button onClick={() => onEdit(todo)}>Editar</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }*/
 

export default List;