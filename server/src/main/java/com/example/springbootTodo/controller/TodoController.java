package com.example.springbootTodo.controller;

import com.example.springbootTodo.model.Todo;
import com.example.springbootTodo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/")
public class TodoController {

    @Autowired
    private TodoRepository todoRepo;

    @CrossOrigin
    @GetMapping("/todos")
    public ResponseEntity<?> getAllTodos() {
        List<Todo> todos = todoRepo.findAll();
        if(todos.size() > 0){
            return new ResponseEntity<List<Todo>>(todos, HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No todos available" , HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PostMapping("/todos/insert")
    private ResponseEntity<?> insertNewTodos(@RequestBody Todo todos) {
        try{
            todoRepo.save(todos);
            return new ResponseEntity<Todo>(todos, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin
    @GetMapping("/todos/getOne/{id}")
    private ResponseEntity<?> getOneTodo(@PathVariable("id") String id) {
        Optional<Todo> todosOptional = todoRepo.findById(id);
        if(todosOptional.isPresent()){
            return new ResponseEntity<>(todosOptional.get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Todo not found with id"+id , HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PutMapping("/todos/update/{id}")
    private ResponseEntity<?> updateTodo(@PathVariable("id") String id, @RequestBody Todo todos) {
        Optional<Todo> todosOptional = todoRepo.findById(id);
        if(todosOptional.isPresent()){
            Todo todoSave = todosOptional.get();
            todoSave.setTodo(todos.getTodo() != null ? todos.getTodo() : todoSave.getTodo());
            todoSave.setDescription(todos.getDescription() != null ? todos.getDescription() : todoSave.getDescription());
            todoSave.setStatus(todos.getStatus() != null ? todos.getStatus() : todoSave.getStatus());
            todoRepo.save(todoSave);
            return new ResponseEntity<>(todoSave, HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Todo not found with id"+id , HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @DeleteMapping("todos/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable ("id") String id){
        try{
            todoRepo.deleteById(id);
            return new ResponseEntity<>("Successfully deleted with id" +id, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }

}
