import React, {useEffect, useState} from "react";

export default function MostrarPais({name}) {
  const [pais, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    setError(null);

    fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("API não respondeu");
        return res.json();
      })
      .then((data) => {
        setCountry(data[0] || null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!pais) return <div>Nenhum país encontrado</div>;

  const flag = pais.flags?.svg || pais.flags?.png;
  const officialName = pais.name?.official || pais.name?.common;
  const capital = Array.isArray(pais.capital)
    ? pais.capital.join(", ")
    : pais.capital || "—";

  return (
    <div className="pais-card">
      {flag && (
        <img
          src={flag}
          alt={`Bandeira de ${officialName}`}
          style={{width: 240}}
        />
      )}
      <h2>{officialName}</h2>
      <p>
        <strong>Capital:</strong> {capital}
      </p>
    </div>
  );
}
