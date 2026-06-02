import { useQuiz } from "../hooks/useQuiz";
import Header from "../components/Header";
import QuizCard from "../components/QuizCard";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import Results from "../components/Results";
import { TIMER_SECONDS } from "../utils/scoreCalculator";

interface QuizPageProps {
  onRanking: () => void;
}

export default function QuizPage({ onRanking }: QuizPageProps) {
  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    points,
    answerStates,
    answered,
    timeLeft,
    gameOver,
    animKey,
    handleAnswer,
    restart,
  } = useQuiz();

  if (gameOver) {
    return (
      <Results
        points={points}
        totalQuestions={totalQuestions}
        onRestart={restart}
        onRanking={onRanking}
      />
    );
  }

  return (
    <div className="quiz-wrapper">
      <Header
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        points={points}
      />

      <div className="quiz-intro">
        <h1 className="quiz-page-title">Tecnologia e Sustentabilidade</h1>
        <p className="quiz-page-subtitle">
          O futuro sustentável do agronegócio depende da inteligência artificial,
          automação, preservação ambiental e inovação tecnológica.
        </p>
      </div>

      <QuizCard animKey={animKey}>
        <Question
          text={currentQuestion.question}
          answers={currentQuestion.answers}
          answerStates={answerStates}
          answered={answered}
          onAnswer={handleAnswer}
        />
        <ProgressBar animKey={animKey} />
      </QuizCard>

      <div className="quiz-footer">
        <div className="tags-row">
          {["ChatGPT", "Replit", "IA", "AgroTech", "Sustentável"].map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div
          className="timer"
          style={{ color: timeLeft <= 5 ? "#e74c3c" : "#7CFC00" }}
        >
          {timeLeft}s
        </div>
      </div>
    </div>
  );
}
