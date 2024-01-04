package com.example.api.services;

import com.example.api.models.EasyGenCertModel;
import org.springframework.stereotype.Service;

@Service
public interface GenerateEasyGenCertService {
    public byte[] generatePdf(EasyGenCertModel easyGenCert);
}
