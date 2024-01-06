import { useState } from "react";
import "./Modal.css";

const Modal = ({ closeModal, handleGenerate, loading, message }) => {

    const [student, setStudent] = useState("");
    const [course, setCourse] = useState("");
    const [org, setOrg] = useState("");
    const [workload, setWorkload] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [certificateType, setCertificateType] = useState(0);

    const [validation, setValidation] = useState({});

    const validateFields = () => {
        const errors = {};
      
        if (!student) {
          errors.student = "Este campo é obrigatório";
        }

        if (!course) {
            errors.course = "Este campo é obrigatório";
        }

        if (!org) {
            errors.org = "Este campo é obrigatório";
        }

        if (!workload) {
            errors.workload = "Este campo é obrigatório";
        }
        
        if (!month || !year) {
            errors.dateOfIssue = "Estes campos são obrigatórios";
        }

        if (!certificateType) {
            errors.certificateType = "Este campo é obrigatório";
        }
      
        setValidation(errors)
        return errors;
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateFields();

        if(Object.keys(errors).length !== 0){
            return;
        }
      
        let certificateTypeString;
      
        if (certificateType === 1) {
          certificateTypeString = "Conclusão";
        }
      
        const data = {
          studentName: student,
          courseName: course,
          issuingOrganization: org,
          workloads: parseInt(workload),
          dateOfIssueMonth: month,
          dateOfIssueYear: parseInt(year),
          certificateType: certificateTypeString,
        };
      
        handleGenerate(data);
    };

    const clearStates = () => {
        setStudent("")
        setCourse("")
        setOrg("");
        setWorkload("");
        setMonth("");
        setYear("");
        setCertificateType(0);
    }

    const clearValidation = () => {
        setValidation({});
    }

  return (
    <div>
        <div id="fade" className="hide" onClick={() => { closeModal(); clearValidation(); }}></div>
        <div id="modal" className="hide">
            { !loading ? (
                <>
                <h2>Informações</h2>
                {message && <p className={message.type}>{message.msg}</p>}
                <form onSubmit={ handleSubmit }>
                    <div className="modal-grid">
                        <div className="student">
                            <label htmlFor="student">Nome do Aluno:</label>
                            <input type="text"
                                    className={
                                        validation && validation.student && "validation-input"
                                    }
                                    id="student"
                                    placeholder="Insira o nome do Aluno" 
                                    onChange={(e) => setStudent(e.target.value)}
                                    value={student} />
                            { validation && validation.student && (
                                <small className="validation-message">{validation.student}</small>
                            )}
                        </div>
                        <div className="course">
                            <label htmlFor="course">Nome do Curso:</label>
                            <input type="text"
                                    className={
                                        validation && validation.course && "validation-input"
                                    }
                                    id="course"
                                    placeholder="Insira o nome do Curso" 
                                    onChange={(e) => setCourse(e.target.value)}
                                    value={course} />
                            { validation && validation.course && (
                                <small className="validation-message">{validation.course}</small>
                            )}
                        </div>
                        <div className="org">
                            <label htmlFor="org">Organização Emissora:</label>
                            <input type="text"
                                    className={
                                    validation && validation.org && "validation-input"
                                    } 
                                    id="org"
                                    placeholder="Insira o nome da organização emissora" 
                                    onChange={(e) => setOrg(e.target.value)}
                                    value={org} />
                            { validation && validation.org && (
                                <small className="validation-message">{validation.org}</small>
                            )}
                        </div>
                        <div className="workload">
                            <label htmlFor="workload">Carga Horária:</label>
                            <input type="number"
                                    className={
                                        validation && validation.workload && "validation-input"
                                    } 
                                    id="workload"
                                    placeholder="Insira a carga horária" 
                                    onChange={(e) => setWorkload(e.target.value)}
                                    value={workload} />
                            { validation && validation.workload && (
                                <small className="validation-message">{validation.workload}</small>
                            )}
                        </div>
                        <div className="dateOfIssue">
                            <label htmlFor="dateOfIssue">Data de Emissão:</label>
                            <div className="dateOfIssue-inputs">
                                <input type="text"
                                        className={
                                            validation && validation.dateOfIssue && "validation-input"
                                        }
                                        placeholder="Mês / Ex: Janeiro" 
                                        onChange={(e) => setMonth(e.target.value)}
                                        value={month} />
                                <input type="text"
                                        className={
                                            validation && validation.dateOfIssue && "validation-input"
                                        }
                                        placeholder="Ano / Ex: 2024" 
                                        onChange={(e) => setYear(e.target.value)}
                                        value={year} />
                                { validation && validation.dateOfIssue && (
                                    <small className="validation-message dateOfIssue-validation">{validation.dateOfIssue}</small>
                                )}
                            </div>
                        </div>
                        <div className="certificateType">
                            <label htmlFor="certificateType">Tipo de Certificado:</label>
                            <select id="certificateType" 
                            className={
                                validation && validation.certificateType && "validation-input"
                            }
                            onChange={ (e) => setCertificateType(Number(e.target.options[e.target.selectedIndex].value))}
                            value={certificateType}>
                                <option value="0" disabled> -- Selecione uma opção -- </option>
                                <option value="1">Conclusão</option>
                            </select>
                            { validation && validation.certificateType && (
                                <small className="validation-message">{validation.certificateType}</small>
                            )}
                        </div>
                    </div>
                    <div className="buttons-modal">
                        <button type="button" id="cancel" onClick={() => { closeModal(); clearStates(); clearValidation(); }}>CANCELAR</button>
                        <button id="generate">GERAR</button>
                    </div>
                </form>
            </>
            ): (
                <div className="loading">
                    <p>Gerando documento, aguarde...</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default Modal