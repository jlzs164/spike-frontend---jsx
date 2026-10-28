function ProdutoCard({ nome, preco, categoria }) {
  return (
    <article className="produto-card">
      <h2>{nome}</h2>
      <p>Preço: R$ {preco}</p>
      <p>Categoria: {categoria}</p>
    </article>
  );
}

export default ProdutoCard;