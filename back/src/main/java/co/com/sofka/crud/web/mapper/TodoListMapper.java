package co.com.sofka.crud.web.mapper;

import co.com.sofka.crud.entity.ToDoList;
import co.com.sofka.crud.web.dto.TodoListDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TodoListMapper {
    TodoMapper INSTANCE = Mappers.getMapper( TodoMapper.class );

    TodoListDto toTodoListDto(ToDoList toDoList);

    ToDoList toTodoList(TodoListDto todoListDto);

    default List<TodoListDto> TODO_LIST_DTO_LIST(List<ToDoList> toDoLists){
        if(toDoLists == null) return new ArrayList<>();
        return toDoLists.stream().map(this::toTodoListDto).collect(Collectors.toList());
    }
}
