package com.namyoon.todo_backend.category;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService{

    private final CategoryRepository categoryRepository;

    @Override
    public CategoryResponseDto saveCategory(CategoryRequestDto requestDto) {
        Category category = Category.builder()
            .name(requestDto.getName())
            .build();
        
        Category saved = categoryRepository.save(category);

        return new CategoryResponseDto(saved.getId(), saved.getName());

        }

    @Override
    public List<CategoryResponseDto> getAllCategories() {
        return categoryRepository.findAll().stream()
            .map(category -> new CategoryResponseDto(category.getId(), category.getName()))
            .collect(Collectors.toList());
        }

   
    
}
