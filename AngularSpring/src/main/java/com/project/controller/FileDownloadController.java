package com.project.controller;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/api/download")
public class FileDownloadController {

    private static final Logger logger = LoggerFactory.getLogger(FileDownloadController.class);

    @Autowired
    private GridFsTemplate gridFsTemplate;

    @GetMapping("/{filename}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String filename) {
        try {
            GridFsResource resource = gridFsTemplate.getResource(new Query().addCriteria(Criteria.where("filename").is(filename)));
            if (resource != null) {
                try (InputStream inputStream = resource.getInputStream()) {
                    byte[] fileData = IOUtils.toByteArray(inputStream);

                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.parseMediaType(resource.getContentType()));
                    headers.setContentDispositionFormData("attachment", resource.getFilename());

                    return ResponseEntity.ok().headers(headers).body(fileData);
                }
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (IOException e) {
            logger.error("File download failed: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(("File download failed: " + e.getMessage()).getBytes());
        }
    }
}
