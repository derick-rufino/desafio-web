// import { useState } from 'react'
import './App.css'
import { CardPais } from './components/cardPais'

function App() {
  // const [count, setCount] = useState(0)
  const lidarComDetalhes = () => {
    console.log("Navegando para detalhes do país...");
    console.log("Abrindo detalhes do país...");
  };

const lidarComFavorito = () => {
  console.log("Adicionando país aos favoritos...");
  console.log("País adicionado aos favoritos!");
};

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <CardPais 
        bandeira=""
        nome=""
        capital="Brasília"
        continente="Américas"
        populacao={203000000}
        aoClicarDetalhes={lidarComDetalhes}
        aoClicarFavorito={lidarComFavorito}
      />
    </div>
  )
}

export default App
