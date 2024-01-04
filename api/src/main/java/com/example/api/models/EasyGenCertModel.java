package com.example.api.models;


public class EasyGenCertModel {
    private String studentName;
    private String courseName;
    private String issuingOrganization;
    private int workloads;
    private String dateOfIssueMonth;
    private int dateOfIssueYear;
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

    public int getWorkloads() {
        return workloads;
    }

    public void setWorkloads(int workloads) {
        this.workloads = workloads;
    }

    public String getDateOfIssueMonth() {
        return dateOfIssueMonth;
    }

    public void setDateOfIssueMonth(String dateOfIssueMonth) {
        this.dateOfIssueMonth = dateOfIssueMonth;
    }

    public int getDateOfIssueYear() {
        return dateOfIssueYear;
    }

    public void setDateOfIssueYear(int dateOfIssueYear) {
        this.dateOfIssueYear = dateOfIssueYear;
    }

    public String getCertificateType() {
        return certificateType;
    }

    public void setCertificateType(String certificateType) {
        this.certificateType = certificateType;
    }

}
