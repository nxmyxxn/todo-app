package com.namyoon.todo_backend.todoitem;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TodoItemResponseDto {
    private Long id;
    private String content;
    private Long categoryId;
}