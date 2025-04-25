package com.namyoon.todo_backend.todoitem;

import java.util.List;

public interface TodoItemService {

    TodoItemResponseDto addTodoItem(TodoItemRequestDto dto);
    List<TodoItemResponseDto> getItemByCategory(Long categoryId);

    
}
