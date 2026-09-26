import './App.css'
import { Signature } from './components/Signature';
import { SocialHighlightCards } from './components/SocialHighlightCards';

import imgNovaData from './assets/visao_geral.png'
import imgTabManager from './assets/tabmanager.png'

function App() {
  return (
    <div className="site">

      {/* Cabeçalho */}
      <header className="header">
  <div className="header-container">

    <a href="#" className="logo">
      Murilo Souza<span>.</span>
    </a>

    <nav className="nav">
      <a href="#sobre">Sobre</a>
      <a href="#projetos">Projetos</a>
      <a href="#contato">Contato</a>
    </nav>

  </div>
</header>


      <main>

        {/* Hero */}
        <section className="hero">
          <div className="container">

            <div className="hero-content">

              <p className="hero-label">
  TECNOLOGIA • PROCESSOS • DADOS • BI
</p>

              <h2>
                Otimizando <span>processos</span> e potencializando <span>sistemas.</span>
              </h2>

              <p className="hero-description">
  Profissional com experiência em Tecnologia da Informação e processos
  administrativos, atuando na organização de informações, gestão de
  processos, análise de dados e desenvolvimento de soluções para
  gerar resultados reais.
</p>

              <div className="hero-buttons">
                <a href="#projetos" className="btn btn-primary">
                  Ver projetos
                </a>

                <a href="#contato" className="btn btn-secondary">
                  Entre em contato
                </a>
              </div>

            </div>

          </div>
        </section>


        {/* Sobre Mim */}
        <section id="sobre" className="section">
          <div className="container">

            <div className="section-header">
              <span className="section-label">SOBRE MIM</span>
              <h3>Quem sou eu</h3>
            </div>

            <div className="about-card">

              <div className="about-content">

                <p>
                  Sou formado em <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong>,
                  com experiência nas áreas de Tecnologia da Informação,
                  processos, contratos e gestão de portfólio.
                </p>

                <p>
                  Minha experiência profissional me permitiu desenvolver uma
                  visão prática sobre como a tecnologia pode ser utilizada
                  para resolver problemas e melhorar processos empresariais.
                </p>

                <p>
                  Atualmente direciono minha carreira para <strong>Dados,
                  Business Intelligence e Tecnologia em processos administrativos</strong>, utilizando
                  ferramentas como Power BI, Excel e Python para
                  transformar informações em soluções que apoiem a tomada
                  de decisões.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* Projetos */}
<section id="projetos" className="projects-showcase">

  <div className="projects-intro">
    <div className="container">

      <span className="section-label">
        PORTFÓLIO
      </span>

      <h3>
        Projetos em destaque
      </h3>

      <p>
        Soluções desenvolvidas unindo tecnologia, processos e dados
        para transformar informações em resultados.
      </p>

    </div>
  </div>


  {/* Projeto 01 */}
  <article className="project-slide">

    <div className="project-slide-number">
      01
    </div>

    <div className="project-slide-image">
      <img
        src={imgNovaData}
        alt="Dashboard do projeto NovaData"
      />
    </div>

    <div className="project-slide-content">

      <span className="project-slide-category">
        ENGENHARIA DE DADOS & BI
      </span>

      <h4>
        Projeto BI
        <br />
        <span>NovaData</span>
      </h4>

      <p>
        Solução End-to-End desenvolvida para estruturar o fluxo
        de informações corporativas, desde a extração e tratamento
        dos dados até a criação de dashboards executivos no Power BI.
      </p>

      <div className="technologies">

        <span className="technology">
          Power BI
        </span>

        <span className="technology">
          Python
        </span>

        <span className="technology">
          SQL Server
        </span>

      </div>

      <a
        href="https://github.com/MrsMurilo/Projeto-BI-NovaData"
        target="_blank"
        rel="noopener noreferrer"
        className="project-slide-button"
      >
        Ver projeto →
      </a>

    </div>

  </article>

{/* Projeto 02 */}
  <article className="project-slide">

    <div className="project-slide-number">
      02
    </div>

    <div className="project-slide-image">
  <video
    src="/projects/tab-manager-demo.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

    <div className="project-slide-content">

      <span className="project-slide-category">
        EXTENSÃO DE NAVEGADOR
      </span>

      <h4>
        Projeto
        <br />
        <span>TabManager</span>
      </h4>

      <p>
        Uma extensão moderna para Google Chrome desenvolvida em React, TypeScript e Tailwind CSS, desenhada para resolver o problema de sobrecarga de abas e consumo excessivo de memória RAM no navegador.
      </p>

      <div className="technologies">

        <span className="technology">
          React
        </span>

        <span className="technology">
          TypeScript
        </span>

        <span className="technology">
          Tailwind CSS
        </span>

      </div>

      <a
        href="https://github.com/MrsMurilo/Tab-Manager"
        target="_blank"
        rel="noopener noreferrer"
        className="project-slide-button"
      >
        Ver projeto →
      </a>

    </div>

  </article>

</section>



        {/* Contato */}
        <section id="contato" className="section contact-section">
          <div className="container">

            <div className="contact-card">

              <div className="contact-content">

                <span className="section-label">
                  CONTATO
                </span>

                <h3>
                  Vamos conversar?
                </h3>

                <p>
                  Estou disponível para novas conexões e oportunidades
                  para agregar valor através da tecnologia e dos dados.

                </p>

              </div>
              
              <div style={{ marginTop: "2rem" }}>
               <SocialHighlightCards />
               </div>

            </div>

          </div>
        </section>

        </main>

      {/* Rodapé */}

{/* Aqui termina a sua section de contato */}

      {/* --- INÍCIO DO RODAPÉ --- */}
      <footer className="footer-section">
        <div className="footer-container">
          
          {/* Lado Esquerdo: Copyright */}
          <p className="footer-copyright">
            © 2026 Murilo Souza. Todos os direitos reservados.
          </p>

          {/* Lado Direito: Assinatura */}
          {/* Coloque a imagem da sua assinatura na pasta public ou importe ela no topo do arquivo */}
          <img 
            src="/AssinaturaSite.png" 
            alt="Assinatura Murilo Souza" 
            className="footer-signature" 
          />

        </div>
      </footer>
  {/* --- FIM DO RODAPÉ --- */}

    </div>
  );
  }

  export default App;