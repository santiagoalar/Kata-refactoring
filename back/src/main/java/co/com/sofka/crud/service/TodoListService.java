package co.com.sofka.crud.service;

import co.com.sofka.crud.entity.ToDoList;
import co.com.sofka.crud.repository.TodoListRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListService {

    @Autowired
    private TodoListRespository todoListRespository;

    public  Iterable<ToDoList> list(){
        return todoListRespository.findAll();
    }

    public ToDoList save(ToDoList toDoList){
        return todoListRespository.save(toDoList);
    }

    public ToDoList get(Long id){
        return todoListRespository.findById(id).orElseThrow();
    }

    public void delete(Long id){
        todoListRespository.delete(get(id));
    }

}
