import {
  getPercentage,
  getPerformanceEmoji,
  getPerformanceLabel,
  POINTS_PER_QUESTION,
} from "../utils/scoreCalculator";

interface ResultsProps {
  points: number;
  totalQuestions: number;
  onRestart: () => void;
  onRanking: () => void;
}

export default function Results({ points, totalQuestions, onRestart, onRanking }: ResultsProps) {
  const percentage = getPercentage(points, totalQuestions);
  const emoji = getPerformanceEmoji(percentage);
  const label = getPerformanceLabel(percentage);

  return (
    <div className="results-card animate-pop-in">
      <div className="results-emoji">{emoji}</div>
      <h2 className="results-title animate-pulse-glow">QUIZ FINALIZADO!</h2>
      <p className="results-subtitle">
        O agro inteligente protege o planeta e constrói um futuro melhor 🌎
      </p>

      <div className="score-box">
        <div className="score-label">PONTUAÇÃO FINAL</div>
        <div className="score-value">{points}</div>
        <div className="score-max">de {totalQuestions * POINTS_PER_QUESTION} pontos possíveis</div>
      </div>

      <div className="results-badges">
        <span className="badge badge-green">{label}</span>
        <span className="badge badge-gray">{percentage}% de aproveitamento</span>
      </div>

      <div className="results-actions">
        <button className="btn-primary" onClick={onRestart}>
          Jogar Novamente
        </button>
        <button className="btn-secondary" onClick={onRanking}>
          Ver Ranking
        </button>
      </div>
    </div>
  );
}
