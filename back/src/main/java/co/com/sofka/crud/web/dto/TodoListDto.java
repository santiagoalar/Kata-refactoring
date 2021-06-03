package co.com.sofka.crud.web.dto;

import co.com.sofka.crud.entity.Todo;

import java.util.List;

public class TodoListDto {

    private Long id;
    private String name;
    private List<Todo> todoList;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Todo> getTodoList() {
        return todoList;
    }

    public void setTodoList(List<Todo> todoList) {
        this.todoList = todoList;
    }
}
