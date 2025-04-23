package com.namyoon.todo_backend.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.namyoon.todo_backend.user.User;


public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByEmail(String eamil);
    
}
