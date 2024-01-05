package com.example.api.models;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class EasyGenCertModel {

    @NotBlank(message = "O nome do estudante não pode estar em branco.")
    private String studentName;
    @NotBlank(message = "O nome do curso não pode estar em branco.")
    private String courseName;
    @NotBlank(message = "A organização emissora não pode estar em branco.")
    private String issuingOrganization;
    @NotNull(message = "A carga horária não pode ser nulo.")
    private Integer workloads;
    @NotBlank(message = "O mês de emissão não pode estar em branco.")
    private String dateOfIssueMonth;
    @NotNull(message = "O ano de emissão não pode ser nulo.")
    private Integer dateOfIssueYear;
    @NotBlank(message = "O tipo de certificado não pode estar em branco.")
    private String certificateType;

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getIssuingOrganization() {
        return issuingOrganization;
    }

    public void setIssuingOrganization(String issuingOrganization) {
        this.issuingOrganization = issuingOrganization;
    }

    public Integer getWorkloads() {
        return workloads;
    }

    public void setWorkloads(Integer workloads) {
        this.workloads = workloads;
    }

    public String getDateOfIssueMonth() {
        return dateOfIssueMonth;
    }

    public void setDateOfIssueMonth(String dateOfIssueMonth) {
        this.dateOfIssueMonth = dateOfIssueMonth;
    }

    public Integer getDateOfIssueYear() {
        return dateOfIssueYear;
    }

    public void setDateOfIssueYear(Integer dateOfIssueYear) {
        this.dateOfIssueYear = dateOfIssueYear;
    }

    public String getCertificateType() {
        return certificateType;
    }

    public void setCertificateType(String certificateType) {
        this.certificateType = certificateType;
    }
}
