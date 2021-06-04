package co.com.sofka.crud.controller;

import co.com.sofka.crud.entity.ToDoList;
import co.com.sofka.crud.service.TodoListService;
import co.com.sofka.crud.web.dto.TodoListDto;
import co.com.sofka.crud.web.mapper.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("api")
public class TodoListController {

    @Autowired
    private TodoListService todoListService;

    @Autowired
    private TodoListMapper todoListMapper;

    @GetMapping("todosList")
    public List<TodoListDto> list(){
        return todoListMapper.TODO_LIST_DTO_LIST((List<ToDoList>) todoListService.list());
    }

    @PostMapping(value = "todoList")
    public TodoListDto save(@RequestBody TodoListDto todoListDto) {
        return getTodoListDto(todoListDto);
    }

    @PutMapping(value = "todoList")
    public TodoListDto update(@RequestBody TodoListDto todoListDto){
        if( todoListDto != null){
            return getTodoListDto(todoListDto);
        }
        throw new RuntimeException("The id provided does not exit");

    }

    private TodoListDto getTodoListDto(@RequestBody TodoListDto todoListDto) {
        ToDoList toDoList = todoListService.save(todoListMapper.toTodoList(todoListDto));
        return todoListMapper.toTodoListDto(toDoList);
    }


    @DeleteMapping(value = "{id}/todoList")
    public void delete(@PathVariable("id") Long id){
        todoListService.delete(id);
    }


}
