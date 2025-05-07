package com.namyoon.todo_backend.category;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import com.namyoon.todo_backend.todoitem.TodoItem;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Builder.Default
    @OneToMany(mappedBy="category", cascade=CascadeType.ALL)
    private List<TodoItem> items = new ArrayList<>();
}
