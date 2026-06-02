interface HomeProps {
  onStart: () => void;
  onRanking: () => void;
}

export default function Home({ onStart, onRanking }: HomeProps) {
  return (
    <div className="home-card animate-pop-in">
      <div className="logo" style={{ fontSize: 48, marginBottom: 16 }}>🌱 AGRO FORTE</div>
      <h1 className="home-title">Tecnologia e Sustentabilidade no Agro do Futuro</h1>
      <p className="home-subtitle">
        Teste seus conhecimentos sobre inteligência artificial, automação,
        preservação ambiental e inovação tecnológica no agronegócio. São 10
        perguntas com 20 segundos cada — responda rápido para ganhar mais pontos!
      </p>

      <div className="home-stats">
        <div className="stat-item">
          <span className="stat-number">10</span>
          <span className="stat-label">Perguntas</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">20s</span>
          <span className="stat-label">Por questão</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">1000</span>
          <span className="stat-label">Pts máximo</span>
        </div>
      </div>

      <div className="home-actions">
        <button className="btn-primary btn-large" onClick={onStart}>
          Iniciar Quiz
        </button>
        <button className="btn-secondary" onClick={onRanking}>
          Ver Ranking
        </button>
      </div>

      <div className="home-tags">
        {["ChatGPT", "Replit", "IA", "AgroTech", "Sustentável"].map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
