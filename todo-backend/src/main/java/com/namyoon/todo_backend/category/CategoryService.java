package com.namyoon.todo_backend.category;

import java.util.List;

public interface CategoryService {

    CategoryResponseDto saveCategory(CategoryRequestDto requestDto);
    List<CategoryResponseDto> getAllCategories();

}
