package com.namyoon.todo_backend.todoitem;

import java.util.List;

@Sercive
public interface TodoItemService {

    TodoItemResponseDto createTodoItem(TodoItemRequestDto dto);
    List<TodoItemResponseDto> getItemByCategory(Long categoryId);

    
}
