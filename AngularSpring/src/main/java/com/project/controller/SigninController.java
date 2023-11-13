package com.project.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class SigninController {

    @GetMapping("/signin")
    public ResponseEntity<String> signIn() {
        return ResponseEntity.ok("Signin API");
    }

    @GetMapping("/signout")
    public ResponseEntity<String> signOut() {
        return ResponseEntity.ok("Signout API");
    }

    @GetMapping("/upload-file")
    public ResponseEntity<String> uploadFile() {
        return ResponseEntity.ok("Upload File API");
    }

    @GetMapping("/download-file")
    public ResponseEntity<String> downloadFile() {
        return ResponseEntity.ok("Download File API");
    }
}