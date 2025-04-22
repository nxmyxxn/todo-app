package com.namyoon.todo_backend.user;

public interface UserService {
    User save(User user);
    User findByEmail(String email);    
    UserResponseDto signup(UserRequestDto userRequestDto);
}
