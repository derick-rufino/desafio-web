import { useState } from "react";
import "./App.css";

import { ModalDetalhes } from "./components/ModalDetalhes.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paisSelecionado, setPaisSelecionado] = useState(null);

  const paisExemplo = {
    nome: "Brasil",
    nomeOficial: "República Federativa do Brasil",
    capital: "Brasília",
    continente: "Américas",
    subRegiao: "América do Sul",
    populacao: 203062512,
    areaTerritorial: 8515767,
    moeda: "Real (R$)",
    fusoHorario: "UTC-05:00, UTC-04:00, UTC-03:00, UTC-02:00",
    dominioInternet: ".br",
    bandeiraUrl: "https://flagcdn.com/br.svg",
    idiomas: ["Português"],
  };

  const abrirDetalhesDoPais = (pais) => {
    setPaisSelecionado(pais);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <button
        className="counter"
        onClick={() => abrirDetalhesDoPais(paisExemplo)}
      >
        Ver detalhes do país
      </button>

      <ModalDetalhes
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pais={paisSelecionado}
      />
    </div>
  );
}

export default App;
