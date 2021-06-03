package co.com.sofka.crud.service;

import co.com.sofka.crud.TodoMapper;
import co.com.sofka.crud.TodoRepository;
import co.com.sofka.crud.dto.TodoDto;
import co.com.sofka.crud.entity.Todo;
import com.fasterxml.jackson.databind.cfg.MapperBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public Iterable<Todo> list(){
        return repository.findAll();
    }

    public Todo save(Todo todo){
        return repository.save(todo);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public Todo get(Long id){
         return repository.findById(id).orElseThrow();
    }

 }
