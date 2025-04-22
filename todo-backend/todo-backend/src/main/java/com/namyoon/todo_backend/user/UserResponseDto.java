package com.namyoon.todo_backend.user;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class UserResponseDto {
    private Long id;
    private String email;
    private LocalDateTime createdAt;
}
