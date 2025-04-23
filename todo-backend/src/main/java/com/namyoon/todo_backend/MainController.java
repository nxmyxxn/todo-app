package com.namyoon.todo_backend;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainController {
 
    @GetMapping("/")
    public String mainPage(Model model){
        model.addAttribute("content", "main");
        return "layout/layout";
    }
}
