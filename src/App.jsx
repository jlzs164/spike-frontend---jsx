import ProdutoCard from './components/ProdutoCard.jsx';
import './App.css';

function App() {
  return (
    <div className="pagina">
      <header className="site-header">
        <div className="header-conteudo">
          <h2>Vitrine</h2>
          <p>Produtos para o seu dia a dia</p>
        </div>
      </header>

      <main>
        <section className="introducao">
          <h1>Nossos produtos</h1>
          <p>
            Confira nossa seleção de itens para diferentes
            momentos e necessidades.
          </p>
        </section>

        <section className="produtos">
          <ProdutoCard
            nome="Caderno"
            preco="19,90"
            categoria="Papelaria"
          />

          <ProdutoCard
            nome="Garrafa térmica"
            preco="49,90"
            categoria="Acessórios"
          />

          <ProdutoCard
            nome="Fone de ouvido"
            preco="79,90"
            categoria="Eletrônicos"
          />
        </section>
      </main>

      <footer className="site-footer">
        <p>Vitrine — Projeto de prática com React</p>
      </footer>
    </div>
  );
}

export default App;