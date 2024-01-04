package com.example.api.controllers;

import com.example.api.models.EasyGenCertModel;
import com.example.api.services.GenerateEasyGenCertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EasyGenCertController {
    @Autowired
    GenerateEasyGenCertService generateEasyGenCertService;
    @PostMapping("/generate-pdf")
    public ResponseEntity<Object> generatePDP(@RequestBody EasyGenCertModel easyGenCertModel){
        try{
            byte[] studentPDF = generateEasyGenCertService.generatePdf(easyGenCertModel);
            return ResponseEntity.ok(studentPDF);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
