const MOCK_RANKING = [
  { name: "AgroMaster", points: 980, date: "01/06/2026" },
  { name: "TechFarmer", points: 850, date: "01/06/2026" },
  { name: "SustentAgro", points: 740, date: "01/06/2026" },
  { name: "IAPlantio", points: 700, date: "01/06/2026" },
  { name: "DroneField", points: 620, date: "31/05/2026" },
  { name: "BioInsumos", points: 580, date: "31/05/2026" },
  { name: "CarbonoCred", points: 510, date: "30/05/2026" },
  { name: "Precisão360", points: 430, date: "30/05/2026" },
];

const MEDAL: Record<number, string> = { 0: "🥇", 1: "🥈", 2: "🥉" };

interface RankingProps {
  onBack: () => void;
}

export default function Ranking({ onBack }: RankingProps) {
  return (
    <div className="ranking-card animate-pop-in">
      <button className="btn-back" onClick={onBack}>← Voltar</button>
      <h2 className="ranking-title animate-pulse-glow">🏆 RANKING</h2>
      <p className="ranking-subtitle">Os melhores jogadores do Agro Forte Quiz</p>

      <div className="ranking-list">
        {MOCK_RANKING.map((entry, i) => (
          <div key={i} className={`ranking-row ${i < 3 ? "ranking-row-top" : ""}`}>
            <div className="rank-position">
              {MEDAL[i] ?? <span className="rank-number">{i + 1}</span>}
            </div>
            <div className="rank-name">{entry.name}</div>
            <div className="rank-date">{entry.date}</div>
            <div className="rank-points">{entry.points} pts</div>
          </div>
        ))}
      </div>

      <button className="btn-primary" style={{ marginTop: 32 }} onClick={onBack}>
        Jogar Agora
      </button>
    </div>
  );
}
