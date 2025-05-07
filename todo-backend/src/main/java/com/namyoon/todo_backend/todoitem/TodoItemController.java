package com.namyoon.todo_backend.todoitem;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/categories/{categoryId}/todo-items")
public class TodoItemController {

    private final TodoItemService todoItemService;


    @PostMapping
    public void createTodoItem(@RequestBody TodoItemRequestDto requestDto){
        todoItemService.createTodoItem(requestDto);
    }

    @GetMapping
    public List<TodoItemResponseDto> getTodoItemByCategoryId(@PathVariable Long categoryId){
        return todoItemService.getItemByCategory(categoryId);
    }

    // @DeleteMapping("/{id}")
    // public void deleteTodoItem(@PathVariable Long id){
    //     todoItemService.deleteTodoItem(id);
    // }
    
}
