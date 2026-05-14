import { useState, useEffect } from "react";

function ExibirArea() {
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,population,area,languages",
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar dados dos países");
        }
        const data = await response.json();
        console.log('Dados recebidos:', data[0]); // Log do primeiro país para ver a estrutura
        setPaises(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPaises();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Explorador de Países</h1>
      <div className="paises-lista">
        {paises.map((pais) => (
          <div key={pais.cca3} className="pais-card">
            {/* <h2>{pais.name.common}</h2> */}
            <p>
              <strong>População:</strong> {pais.population.toLocaleString()}
            </p>
            <p>
              <strong>Área Territorial:</strong> {pais.area.toLocaleString()}{" "}
              km²
            </p>
            <p>
              <strong>Idiomas:</strong>{" "}
              {pais.languages
                ? Object.values(pais.languages).join(", ")
                : "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExibirArea;
