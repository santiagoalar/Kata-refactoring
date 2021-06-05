package co.com.sofka.crud.controller;

import co.com.sofka.crud.web.mapper.TodoMapper;
import co.com.sofka.crud.web.dto.TodoDto;
import co.com.sofka.crud.service.TodoService;
import co.com.sofka.crud.entity.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api")
public class TodoController {

    @Autowired
    private TodoService service;

    @Autowired
    private TodoMapper todoMapper;

    @GetMapping(value = "todos")
    public List<TodoDto> list(){
        return todoMapper.toDtoList((List<Todo>) service.list());
    }

    @PostMapping(value = "todo")
    public TodoDto save(@RequestBody TodoDto todoDto){
        Todo todo = service.save(todoMapper.todoDtoToTodo(todoDto));
        return todoMapper.todoToTodoDto(todo);
    }

    @PutMapping(value = "todo")
    public TodoDto update(@RequestBody TodoDto todoDto){
        if(todoDto.getId() != null){
            Todo todo = service.save(todoMapper.todoDtoToTodo(todoDto));
            return todoMapper.todoToTodoDto(todo);
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(value = "{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "{id}/todo")
    public Todo get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
