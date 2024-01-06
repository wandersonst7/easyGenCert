# Projeto easyGenCert

easyGenCert é um projeto que possibilita gerar certificados genéricos a partir de informações fornecidas pelo usuário.

## Detalhes
| Tecnologia |
|---|
| Spring-Boot
| ReactJS

## Resumo das Funcionalidaedes
- Gerar Certificado

## Documentação da API

#### Gera certificado em PDF

```http
  POST /generate-pdf
```

#### Json Exemplo
```http
{
	"studentName": "João dos Santos",
	"courseName": "React do zero ao profissional",
	"issuingOrganization": "Udemy",
	"workloads":  "20",
	"dateOfIssueMonth": "Novembro",
	"dateOfIssueYear": "2022",
	"certificateType": "Conclusão"
}
```