import './App.css'

import imgNovaData from './assets/visao_geral.png'

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
                  Business Intelligence e Tecnologia</strong>, utilizando
                  ferramentas como Power BI, SQL, Excel e Python para
                  transformar informações em soluções que apoiem a tomada
                  de decisões.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* Projetos */}
        <section id="projetos" className="section projects-section">
          <div className="container">

            <div className="section-header">
              <span className="section-label">PORTFÓLIO</span>
              <h3>Projetos em destaque</h3>
            </div>


            {/* Projeto NovaData */}
            <article className="project-card">

              <div className="project-image">
                <img
                  src={imgNovaData}
                  alt="Dashboard NovaData"
                />
              </div>


              <div className="project-content">

                <span className="project-category">
                  Engenharia de Dados & BI
                </span>

                <h4>
                  Projeto BI - NovaData
                </h4>

                <p>
                  Solução End-to-End desenvolvida para estruturar o fluxo
                  de informações corporativas. O projeto engloba desde a
                  modelagem e extração de dados com Python e SQL Server,
                  até a criação de painéis executivos no Power BI,
                  incluindo Análise de Pareto (Curva ABC) e gestão de estoque.
                </p>


                <div className="technologies">

                  <span className="technology powerbi">
                    Power BI
                  </span>

                  <span className="technology python">
                    Python
                  </span>

                  <span className="technology sql">
                    SQL Server
                  </span>

                </div>


                <a
                  href="https://github.com/MrsMurilo/Projeto-BI-NovaData"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Ver no GitHub →
                </a>

              </div>

            </article>

          </div>
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


              <div className="contact-buttons">

                <a
                  href="https://linkedin.com/in/murilo-souza-mszz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button linkedin"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:murilosouza.sm@gmail.com"
                  className="contact-button email"
                >
                  E-mail
                </a>

                <a
                  href="https://wa.me/5511973516812?text=Olá%2C%20vim%20através%20do%20seu%20site!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button whatsapp"
                >
                  WhatsApp
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>


      {/* Rodapé */}
      <footer className="footer">
        <div className="container">
          <p>
            © 2026 Murilo Souza. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App