package com.project.AngularSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.project.AngularSpring") 
public class AngularSpringApplication {
    public static void main(String[] args) {
        SpringApplication.run(AngularSpringApplication.class, args);
    }
}
