package com.namyoon.todo_backend.todoitem;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoItemRepository extends JpaRepository<TodoItem, Long>{
    List<TodoItem> findByCategoryId(Long categoryId);
}
