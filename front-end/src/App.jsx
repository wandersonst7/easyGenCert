import './App.css'

// Components
import Modal from './components/Modal';

// Icons
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";
import { useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Mensagem de erro se houver");
  
  const handleGenerate = async(data) => {
    console.log(data)

    // Requisição
  }

  const closeModal = () => {

    if(loading){
      return;
    }

    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
    modal.classList.add("hide");
    fade.classList.add("hide");
  }

  const openModal = () => {
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
    modal.classList.remove("hide");
    fade.classList.remove("hide");
  }

  return (
  <div>

    <Modal closeModal={closeModal} handleGenerate={handleGenerate} loading={loading} message={message}/>

    <header className="header">
      <div>
          <div>
            <h5>
              <a href="#section-easygencert">easyGenCert</a>
            </h5>
            <a href="#section-about">Sobre</a>
          </div>
      </div>
    </header>

    <main>
      <section id="section-easygencert">
        <div className="section-easygencert-grid">
          <div className="cta">
            <h1>EASYGENCERT</h1>
            <p>Gere certificados de maneira Fácil com apenas alguns cliques!</p>
            <button onClick={() => openModal()}>GERAR AGORA</button>
          </div>
          <img src="format.svg" alt="" />
        </div>
      </section>
      <section id="section-about">
        <div className="section-about-grid">
          <h2>Sobre</h2>
          <img src="easyGenCert.svg" alt="Imagem easyGenCert" />
          <div className='project-info'>
            <h3>Projeto easyGenCert</h3>
            <p>easyGenCert é um projeto aberto que possibilita gerar certificados genéricos a partir de informações fornecidas pelo usuário.</p>

            <h6>Criadores:</h6>
            <div className="creators">
              <a href="https://www.linkedin.com/in/davidcaua" target="_blank" rel="noopener noreferrer">David <HiMiniArrowUpRight /></a>
              <a href="https://www.linkedin.com/in/wandersonst7" target="_blank" rel="noopener noreferrer">Wanderson <HiMiniArrowUpRight /></a>
            </div>

            <div>
              <a id="link-repository" href="https://github.com/wandersonst7/easyGenCert.git" target="_blank" rel="noopener noreferrer">REPOSITÓRIO <FiGithub /> </a>
            </div>
          </div>
        </div>
      </section>
    </main>

  </div>
  )
}

export default App
