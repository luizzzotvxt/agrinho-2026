import { AnswerState } from "../hooks/useQuiz";

const ANSWER_COLORS = [
  { bg: "#6c5ce7", shadow: "rgba(108,92,231,0.5)" },
  { bg: "#00b894", shadow: "rgba(0,184,148,0.5)" },
  { bg: "#d63031", shadow: "rgba(214,48,49,0.5)" },
  { bg: "#0984e3", shadow: "rgba(9,132,227,0.5)" },
];

interface QuestionProps {
  text: string;
  answers: { text: string; correct: boolean }[];
  answerStates: AnswerState[];
  answered: boolean;
  onAnswer: (index: number) => void;
}

function getAnswerStyle(state: AnswerState, bg: string, shadow: string): React.CSSProperties {
  if (state === "correct") {
    return {
      background: "#2ecc71",
      boxShadow: "0 0 24px #2ecc71, 0 0 48px rgba(46,204,113,0.3)",
      transform: "scale(1.04)",
    };
  }
  if (state === "wrong") {
    return {
      background: "#e74c3c",
      boxShadow: "0 0 24px #e74c3c, 0 0 48px rgba(231,76,60,0.3)",
    };
  }
  return { background: bg, boxShadow: `0 4px 20px ${shadow}` };
}

export default function Question({ text, answers, answerStates, answered, onAnswer }: QuestionProps) {
  return (
    <div className="question-section">
      <div className="question-text">{text}</div>
      <div className="answers-grid">
        {answers.map((answer, i) => {
          const color = ANSWER_COLORS[i];
          const state = answerStates[i] ?? "idle";
          return (
            <button
              key={i}
              className="answer-btn"
              disabled={answered}
              onClick={() => onAnswer(i)}
              style={getAnswerStyle(state, color.bg, color.shadow)}
              onMouseEnter={(e) => {
                if (!answered) {
                  (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.12)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (!answered) {
                  (e.currentTarget as HTMLButtonElement).style.filter = "";
                  (e.currentTarget as HTMLButtonElement).style.transform = "";
                }
              }}
            >
              {answer.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
