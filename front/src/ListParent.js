import React, { useContext, useEffect } from 'react';
import {HOST_API } from './App';
import {Store} from './StoreProvider';
import FormChild from './FormChild';
import ListChild from './ListChild';

const List = () => {
  const { dispatch, state: { todoList } } = useContext(Store);
  const currentList = todoList.items;

  useEffect(() => {
    fetch(HOST_API + "/todosList")
      .then(response => response.json())
      .then((items) => {
        dispatch({ type: "update-todoList-list", items })
      })
  }, [dispatch]);


  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todoList", {
      method: "DELETE"
    }).then((items) => {
      dispatch({ type: "delete-todoList-item", id })
    })
  };

  const onEdit = (todoList) => {
    dispatch({ type: "edit-todoList-item", item: todoList })
  };

  const style_div = {
    borderStyle: "dotted",
    margin: 15,
    textAlign: "left"
  }

  return <div>
        {currentList.map((todoList) => {
          return <div key={todoList.id} style={style_div}>
            {todoList.id}            {todoList.name}
            <button onClick={() => onDelete(todoList.id)}>Eliminar</button>
            <button onClick={() => onEdit(todoList)}>Editar</button>
            <FormChild id_todoList={todoList.id}/>
            <ListChild items={todoList.todoList}/>
          </div>
          
        })}
  </div>
}

export default List;