package com.namyoon.todo_backend.todoitem;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.namyoon.todo_backend.category.Category;
import com.namyoon.todo_backend.category.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoItemServiceImpl implements TodoItemService{

    private final TodoItemRepository todoItemRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public TodoItemResponseDto addTodoItem(TodoItemRequestDto dto){
        Category category = categoryRepository.findById(dto.getCategoryId())
            .orElseThrow(()-> new RuntimeException("Category not found"));

        TodoItem item = TodoItem.builder()
            .content(dto.getContent())
            .category(category)
            .build();
        
        TodoItem saved = todoItemRepository.save(item);

        return new TodoItemResponseDto(saved.getId(), saved.getContent(), saved.getCategory().getId());

    }

    @Override
    public List<TodoItemResponseDto> getItemByCategory(Long categoryId){
        return todoItemRepository.findByCategoryId(categoryId).stream()
            .map(item-> new TodoItemResponseDto(item.getId(), item.getContent(), item.getCategory().getId()))
            .collect(Collectors.toList());
    }


}
