import { useEffect } from "react";

export function ModalDetalhes({ isOpen, onClose, pais }) {
  const detalhes = !pais
    ? null
    : {
        nome: pais.nome || "", //usando operador OU, só pro caso de algum país não ter o nome, aí usamos uma string vazia pra evitar erros
        nomeOficial: pais.nomeOficial || "",
        capital: Array.isArray(pais.capital)
          ? pais.capital.join(", ")
          : pais.capital || "",
        continente: Array.isArray(pais.continente)
          ? pais.continente.join(", ")
          : pais.continente || "",
        subRegiao: pais.subRegiao || "",
        populacao: pais.populacao || 0,
        areaTerritorial: pais.areaTerritorial || 0,
        idiomas: pais.idiomas || [],
        moeda: Array.isArray(pais.moeda)
          ? pais.moeda.join(", ")
          : pais.moeda || "",
        fusoHorario: Array.isArray(pais.fusoHorario)
          ? pais.fusoHorario.join(", ")
          : pais.fusoHorario || "",
        dominioInternet: Array.isArray(pais.dominioInternet)
          ? pais.dominioInternet.join(", ")
          : pais.dominioInternet || "",
        bandeiraUrl: pais.bandeiraUrl || "",
        bandeiraEmoji: pais.bandeiraEmoji || pais.flag || "",
      };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose(); // permite fechar o modal apertando Esc no teclado
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label="Detalhes do país"
      >
        <div className="modal-header">
          <h2 className="modal-title">Detalhes do país</h2>
          <button type="button" className="modal-close" onClick={onClose}>
            Fechar
          </button>
        </div>

        {!detalhes ? (
          <p className="modal-empty">Nenhum país selecionado.</p>
        ) : (
          <div className="modal-body">
            <div className="modal-flag">
              {detalhes.bandeiraUrl ? (
                <img
                  src={detalhes.bandeiraUrl}
                  alt={`Bandeira de ${detalhes.nomeOficial || detalhes.nome || "país"}`}
                  loading="lazy"
                />
              ) : detalhes.bandeiraEmoji ? (
                <span
                  aria-label={`Bandeira de ${detalhes.nomeOficial || detalhes.nome || "país"}`}
                >
                  {detalhes.bandeiraEmoji}
                </span>
              ) : null}
            </div>

            <div className="modal-list">
              <div className="modal-item">
                <span className="modal-label">Nome oficial</span>
                <span className="modal-value">
                  {detalhes.nomeOficial || "—"}
                </span>
              </div>
              <div className="modal-item">
                <span className="modal-label">Capital</span>
                <span className="modal-value">{detalhes.capital || "—"}</span>
              </div>
              <div className="modal-item">
                <span className="modal-label">Continente</span>
                <span className="modal-value">
                  {detalhes.continente || "—"}
                </span>
              </div>
              <div className="modal-item">
                <span className="modal-label">Sub-região</span>
                <span className="modal-value">{detalhes.subRegiao || "—"}</span>
              </div>
              <div className="modal-item">
                <span className="modal-label">Área territorial</span>
                <span className="modal-value">
                  {detalhes.areaTerritorial
                    ? detalhes.areaTerritorial.toLocaleString("pt-BR")
                    : "—"}
                </span>
              </div>
              <div className="modal-item">
                <span className="modal-label">População</span>
                <span className="modal-value">
                  {detalhes.populacao
                    ? detalhes.populacao.toLocaleString("pt-BR")
                    : "—"}
                </span>
              </div>
              <div className="modal-item">
                <span className="modal-label">Idiomas</span>
                <span className="modal-value">
                  {detalhes.idiomas.length ? detalhes.idiomas.join(", ") : "—"}
                </span>
              </div>
              <div className="modal-item">
                <span className="modal-label">Moeda</span>
                <span className="modal-value">{detalhes.moeda || "—"}</span>
              </div>
              <div className="modal-item">
                <span className="modal-label">Fuso horário</span>
                <span className="modal-value">
                  {detalhes.fusoHorario || "—"}
                </span>
              </div>
              <div className="modal-item">
                <span className="modal-label">Link do maps</span>
                <span className="modal-value">
                  <a
                    href={detalhes.linkMaps || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no Google Maps
                  </a>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalDetalhes;
