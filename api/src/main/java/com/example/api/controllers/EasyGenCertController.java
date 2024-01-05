package com.example.api.controllers;

import com.example.api.models.EasyGenCertModel;
import com.example.api.services.GenerateEasyGenCertService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import org.springframework.http.MediaType;


@RestController
public class EasyGenCertController {
    @Autowired
    GenerateEasyGenCertService generateEasyGenCertService;
    @PostMapping("/generate-pdf")
    public ResponseEntity<Object> generatePDP(@RequestBody @Valid EasyGenCertModel easyGenCertModel){
        try{
            byte[] studentPDF = generateEasyGenCertService.generatePdf(easyGenCertModel);
            return ResponseEntity.ok(studentPDF);
        } catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleValidationException(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON).body(errors);
    }
    
}
