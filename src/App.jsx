import { useState } from "react";

import { ModalDetalhes } from "./components/ModalDetalhes.jsx";

function App() {
  const [paises, setPaises] = useState([]); // salvar os países que vierem da API, para exibir na tela. sim, vamos salvar todos os dados buscados, depois posso usar para abrir o modal de detalhes sem precisar fazer refetch
  const [favoritosIds, setFavoritosIds] = useState([]); // salvar os IDs dos países fvaoritos, e então ao filtrar, usar eles para exibir
  const [paisSelecionado, setPaisSelecionado] = useState(null); // salvar o país selecionado para exibir os detalhes no modal. aqui sim, só salvo o país selecionado, e não preciso salvar os detalhes, porque já estão salvos no estado de países

  return (
    /* Fluxo e design:

    - barra de pesuisa centralizada
    - logo abaixo, os filtros (continente e população). usar tag <select> para continente é uma boa ideia
    - depois, o dashboard simples: divs com o nome da categoria (total de países caregados, países exibidos, favoritos e continentes disponíveis), e além do nome, exibir os numeros
    - por fim, uma div grande com mini cards de cada país, com nome e bandeira. 
    - ao clicar no card, abrir o modal de detalhes do país, usando os dados já salvos (já foi implementado abaixo :D )
    */ 

    <ModalDetalhes
      isOpen={Boolean(paisSelecionado)}
      onClose={() => setPaisSelecionado(null)}
      pais={paisSelecionado}
    />
  );
}

export default App;
