package co.com.sofka.crud.repository;

import co.com.sofka.crud.entity.ToDoList;
import org.springframework.data.repository.CrudRepository;

public interface TodoListRespository extends CrudRepository<ToDoList, Long> {
}
