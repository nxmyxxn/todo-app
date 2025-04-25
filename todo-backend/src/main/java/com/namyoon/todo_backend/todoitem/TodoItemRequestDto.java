package com.namyoon.todo_backend.todoitem;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TodoItemRequestDto {
    private String content;
    private Long categoryId;
    
}
