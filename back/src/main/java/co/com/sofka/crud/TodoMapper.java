package co.com.sofka.crud;

import co.com.sofka.crud.dto.TodoDto;
import co.com.sofka.crud.entity.Todo;
import org.mapstruct.Mapper;
import org.mapstruct.MapperConfig;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TodoMapper {
    TodoMapper INSTANCE = Mappers.getMapper( TodoMapper.class );

    TodoDto todoToTodoDto(Todo todo);

    Todo todoDtoToTodo(TodoDto todoDto);

    default List<TodoDto> toDtoList(List<Todo> todoList){
        if(todoList == null) return new ArrayList<>();
        return todoList.stream().map(this::todoToTodoDto).collect(Collectors.toList());
    }

  }
