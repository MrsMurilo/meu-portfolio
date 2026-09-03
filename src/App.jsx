import './App.css'
import imgNovaData from './assets/visao_geral.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans scroll-smooth">
      {/* Cabeçalho */}
      <header className="bg-white shadow-sm py-6 px-10 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-900">Murilo Souza.</h1>
        <nav className="space-x-6 text-sm font-semibold text-gray-600">
          <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-blue-600 transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Hero Section (Apresentação) */}
        <section className="text-center mb-24 mt-10">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Otimizando <span className="text-blue-600">processos</span> e potencializando <span className="text-blue-600">sistemas.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profissional de Tecnologia e Gestão focado em conectar rotinas operacionais, análise de dados e desenvolvimento de soluções para gerar resultados reais.
          </p>
        </section>

        {/* Seção Sobre Mim */}
        <section id="sobre" className="mb-24 scroll-mt-24">
          <h3 className="text-3xl font-bold mb-8 border-b-2 border-gray-200 pb-2">Sobre Mim</h3>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed space-y-4 text-lg">
            <p>
              Atualmente cursando <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong>, possuo sólida vivência em processos administrativos, atuando diretamente na área de contratos e gestão de portfólio.
            </p>
            <p>
              Minha experiência diária com o gerenciamento de sistemas de clientes me ensinou a enxergar a tecnologia não apenas como código, mas como uma ferramenta para resolver gargalos operacionais. Busco sempre integrar automações e inteligência de negócios às rotinas empresariais, garantindo que as decisões sejam tomadas com base em dados confiáveis e fluxos de trabalho eficientes.
            </p>
          </div>
        </section>

        {/* Seção de Projetos */}
        <section id="projetos" className="mb-24 scroll-mt-24">
          <h3 className="text-3xl font-bold mb-8 border-b-2 border-gray-200 pb-2">Projetos em Destaque</h3>
          
          {/* Card do Projeto NovaData */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row">
            
            {/* Espaço para a imagem do painel */}
            <div className="md:w-2/5 overflow-hidden flex items-center justify-center bg-gray-100">
  <img src={imgNovaData} alt="Dashboard NovaData" className="w-full h-full object-cover" />
</div>

            {/* Descrição do Projeto */}
            <div className="p-8 md:w-3/5">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-bold mb-1">Engenharia de Dados & BI</div>
              <h4 className="block mt-1 text-2xl leading-tight font-bold text-gray-900">Projeto BI - NovaData</h4>
              <p className="mt-4 text-gray-600">
                Solução *End-to-End* desenvolvida para estruturar o fluxo de informações corporativas. O projeto engloba desde a modelagem e extração de dados com Python e SQL Server, até a criação de painéis executivos no Power BI, incluindo Análise de Pareto (Curva ABC) e gestão de estoque.
              </p>
              
              {/* Tags de Tecnologia */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-bold">Power BI</span>
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold">Python</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">SQL Server</span>
              </div>

              {/* Botão para o GitHub */}
              <div className="mt-8">
                <a href="https://github.com/MrsMurilo/Projeto-BI-NovaData" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                  Ver no GitHub &rarr;
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Seção de Contato */}
        <section id="contato" className="mb-20 scroll-mt-24">
          <h3 className="text-3xl font-bold mb-8 border-b-2 border-gray-200 pb-2">Contato</h3>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-gray-900">Vamos conversar?</h4>
              <p className="text-gray-600 mt-2">Estou disponível para novas conexões e oportunidades para agregar valor à sua operação.</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
  {/* LinkedIn */}
  <a href="https://linkedin.com/in/murilo-souza-mszz" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
    LinkedIn
  </a>
  
  {/* E-mail */}
  <a href="mailto:murilosouza.sm@gmail.com" className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors border border-gray-200">
    E-mail
  </a>

  {/* WhatsApp (Formato: 55 + DDD + Número. Ex: 5511999999999) */}
  <a href="https://wa.me/5511973516812?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site!" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
  WhatsApp
</a>
</div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
