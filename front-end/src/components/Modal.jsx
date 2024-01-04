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

    const handleSubmit = (e) => {
        e.preventDefault();

        let certificateTypeString;

        // Posteriormente vamos aplicar uma função para validar todos os campos... Por enquanto é isso.
        if(certificateType === 1){
            certificateTypeString = "Conclusão"
        }

        const data = {
            student,
            course,
            org,
            workload,
            month,
            year,
            certificateTypeString
        }

        handleGenerate(data)
    }

  return (
    <div>
        <div id="fade" className="hide" onClick={() => closeModal()}></div>
        <div id="modal" className="hide">
            { !loading ? (
                <>
                <h2>Informações</h2>
                {message && <p>{message}</p>}
                <form onSubmit={ handleSubmit }>
                    <div className="modal-grid">
                        <div className="student">
                            <label htmlFor="student">Nome do Aluno:</label>
                            <input type="text"
                                    id="student"
                                    placeholder="Insira o nome do Aluno" 
                                    onChange={(e) => setStudent(e.target.value)}
                                    value={student} />
                        </div>
                        <div className="course">
                            <label htmlFor="course">Nome do Curso:</label>
                            <input type="text"
                                    id="course"
                                    placeholder="Insira o nome do Curso" 
                                    onChange={(e) => setCourse(e.target.value)}
                                    value={course} />
                        </div>
                        <div className="org">
                            <label htmlFor="org">Organização Emissora:</label>
                            <input type="text"
                                    id="org"
                                    placeholder="Insira o nome da organização emissora" 
                                    onChange={(e) => setOrg(e.target.value)}
                                    value={org} />
                        </div>
                        <div className="workload">
                            <label htmlFor="workload">Carga Horária:</label>
                            <input type="number"
                                    id="workload"
                                    placeholder="Insira a carga horária" 
                                    onChange={(e) => setWorkload(e.target.value)}
                                    value={workload} />
                        </div>
                        <div className="dateOfIssue">
                            <label htmlFor="dateOfIssue">Data de Emissão:</label>
                            <div className="dateOfIssue-inputs">
                                <input type="text"
                                        placeholder="Mês / Ex: Janeiro" 
                                        onChange={(e) => setMonth(e.target.value)}
                                        value={month} />
                                <input type="text"
                                        placeholder="Ano / Ex: 2024" 
                                        onChange={(e) => setYear(e.target.value)}
                                        value={year} />
                            </div>
                        </div>
                        <div className="certificateType">
                            <label htmlFor="certificateType">Tipo de Certificado:</label>
                            <select id="certificateType" 
                            onChange={ (e) => setCertificateType(Number(e.target.options[e.target.selectedIndex].value))}
                            value={certificateType}>
                                <option value="0" disabled> -- Selecione uma opção -- </option>
                                <option value="1">Conclusão</option>
                            </select>
                        </div>
                    </div>
                    <div className="buttons-modal">
                        <button type="button" id="cancel" onClick={() => closeModal()}>CANCELAR</button>
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