package com.namyoon.todo_backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User save(User user){
        return userRepository.save(user);
    }

    @Override
    public User findByEmail(String email){
        return userRepository.findByEmail(email)
            .orElseThrow(()-> new RuntimeException("유저를 찾을 수 없습니다."));
    }

    @Override
    public UserResponseDto signup(UserRequestDto userRequestDto){
        User user = User.builder()
            .email(userRequestDto.getEmail())
            .password(passwordEncoder.encode(userRequestDto.getPassword()))
            .build();

        User savedUser = userRepository.save(user);

        return new UserResponseDto(savedUser.getId(), savedUser.getEmail(), savedUser.getCreatedAt());
    }
}
