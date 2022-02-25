package com.example.springbootTodo.repository;

import com.example.springbootTodo.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TodoRepository extends MongoRepository<Todo, String> {
}
