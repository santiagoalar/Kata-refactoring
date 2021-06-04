function reducer(state, action) {
  switch (action.type) {
    case 'update-item':
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.items.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      todoUpItem.items = listUpdateEdit;
      todoUpItem.item = {};
      return { ...state, todo: todoUpItem }
    case 'update-todoList-item':
      const todoListUpItem = state.todoList;
      const todolistUpdateEdit = todoListUpItem.items.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      todoListUpItem.items = todolistUpdateEdit;
      todoListUpItem.item = {};
      return { ...state, todoList: todoListUpItem }
    case 'delete-item':
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.items.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.items = listUpdate;
      return { ...state, todo: todoUpDelete }
    case 'delete-todoList-item':
      const todoListUpDelete = state.todoList;
      const todolistUpdate = todoListUpDelete.items.filter((item) => {
        return item.id !== action.id;
      });
      todoListUpDelete.items = todolistUpdate;
      return { ...state, todoList: todoListUpDelete }
    case 'update-list':
      const todoUpList = state.todo;
      todoUpList.items = action.items;
      return { ...state, todo: todoUpList }
    case 'update-todoList-list':
      const todoUpList2 = state.todo;
      todoUpList2.items = action.items;
      return { ...state, todoList: todoUpList2 }
    case 'edit-item':
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit }
    case 'edit-todoList-item':
      const todoListUpEdit = state.todoList;
      todoListUpEdit.item = action.item;
      return { ...state, todoList: todoListUpEdit }
    case 'add-item':
      const todoListUp1 = state.todoList;
      /*todoUp.push(action.item);
      return { ...state, todo: { items: todoUp, item: {} } }*/
      const listUpdatePush = todoListUp1.items.map((item) => {
        if (item.id === action.item.groupListId) {
          const updatedTodoList = item.todoList.push(action.item);
          return updatedTodoList;
        }
        return item;
      });

      return { ...state, todos: listUpdatePush }

    case 'add-todoList-item':
      const todoListUp = state.todoList.items;
      todoListUp.push(action.item);
      return { ...state, todoList: { items: todoListUp, item: {} } }
    default:
      return state;
  }
}

export default reducer;