package com.namyoon.todo_backend.category;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/categories")
public class CategoryController {

    public final CategoryService categoryService;

    @PostMapping
    public CategoryResponseDto createCategory(@RequestBody CategoryRequestDto requestDto){
        return categoryService.saveCategory(requestDto);
    }
    
    @GetMapping
    public List<CategoryResponseDto> getAllCategories(){
        
        return categoryService.getAllCategories();
    }
    
}
