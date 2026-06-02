interface HeaderProps {
  currentIndex: number;
  totalQuestions: number;
  points: number;
}

export default function Header({ currentIndex, totalQuestions, points }: HeaderProps) {
  return (
    <div className="quiz-header">
      <div className="logo">🌱 AGRO FORTE</div>
      <div className="header-right">
        <div className="question-counter">
          {currentIndex + 1} / {totalQuestions}
        </div>
        <div className="points-badge">Pontos: {points}</div>
      </div>
    </div>
  );
}
