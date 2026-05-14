import estilos from '../App.module.css'

export function CardPais ({ 
  bandeira, 
  nome, 
  capital, 
  continente, 
  populacao,
  aoClicarDetalhes,
  aoClicarFavorito}) {

    const populacaoFormatada = new Intl.NumberFormat('pt-BR').format(populacao);

    return (
      <article className={estilos.cartao}>
      <header className={estilos.cabecalho}>
        <span className={estilos.bandeira}>{bandeira}</span>
        <h2 className={estilos.titulo}>{nome}</h2>
      </header>
      
      <div className={estilos.corpo}>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Continente:</strong> {continente}</p>
        <p><strong>População:</strong> {populacaoFormatada}</p>
      </div>

      <footer className={estilos.acoes}>
        <button onClick={aoClicarDetalhes} className={estilos.botaoDetalhes}>
          Ver detalhes
        </button>
        <button onClick={aoClicarFavorito} className={estilos.botaoFavorito}>
          Favoritar
        </button>
      </footer>
    </article>
    );
}