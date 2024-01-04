package com.example.api.services.impl;

import com.example.api.models.*;
import com.example.api.services.GenerateEasyGenCertService;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;
import org.xhtmlrenderer.pdf.ITextRenderer;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@Service
public class GenerateEasyGenCertImpl implements GenerateEasyGenCertService {

    @Override
    public byte[] generatePdf(EasyGenCertModel easyGenCert) {
        try {
            String pdfHtml = generatePdfHtml(easyGenCert);

            /* Converter HTML para XHTML */
            Document pdfXhtml = Jsoup.parse(pdfHtml);

            /* Adicionar estilo CSS para orientação paisagem */
            pdfXhtml.head().append("<style>@page { size: landscape; }</style>");

            /* Converter XHTML em PDF com Flying Saucer */
            ByteArrayOutputStream pdfOutputStream = new ByteArrayOutputStream();
            ITextRenderer renderer = new ITextRenderer();

            // Configurar a orientação do documento para paisagem
            renderer.setDocumentFromString(pdfXhtml.toString());
            renderer.layout();
            renderer.createPDF(pdfOutputStream);

            return pdfOutputStream.toByteArray();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    private String generatePdfHtml(EasyGenCertModel easyGenCert) {
        try {
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream("PdfTemplate.html");

            if (inputStream != null) {
                String htmlTemplate = new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);

                /* Substituir informações do certificado do aluno aqui */
                htmlTemplate = htmlTemplate.replace("{STUDENTNAME}", easyGenCert.getStudentName());
                htmlTemplate = htmlTemplate.replace("{COURSENAME}", easyGenCert.getCourseName());
                htmlTemplate = htmlTemplate.replace("{ISSUINGORGANIZATION}", easyGenCert.getIssuingOrganization());
                htmlTemplate = htmlTemplate.replace("{WORKLOADS}", String.valueOf(easyGenCert.getWorkloads()));
                htmlTemplate = htmlTemplate.replace("{DATEOFISSUEMONTH}", String.valueOf(easyGenCert.getDateOfIssueMonth()));
                htmlTemplate = htmlTemplate.replace("{DATEOFISSUEYEAR}", String.valueOf(easyGenCert.getDateOfIssueYear()));
                htmlTemplate = htmlTemplate.replace("{CERTIFICATETYPE}", easyGenCert.getCertificateType());

                return htmlTemplate;
            } else {
                return "Erro: Arquivo HTML não encontrado.";
            }
        } catch (IOException e) {
            e.printStackTrace();
            return "Erro na leitura do arquivo HTML.";
        }
    }
}

