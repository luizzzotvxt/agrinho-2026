import { useState, useEffect, useCallback } from "react";
import { questions } from "../data/questions";
import { calculateScore, TIMER_SECONDS } from "../utils/scoreCalculator";

export type AnswerState = "idle" | "correct" | "wrong";

export type RankingEntry = { name: string; points: number; date: string };

export function useQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [answerStates, setAnswerStates] = useState<AnswerState[]>(Array(4).fill("idle"));
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [timerRunning, setTimerRunning] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const initQuestion = useCallback(() => {
    setAnswerStates(Array(4).fill("idle"));
    setAnswered(false);
    setTimeLeft(TIMER_SECONDS);
    setTimerRunning(true);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    initQuestion();
  }, [currentIndex, initQuestion]);

  const goNext = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      setGameOver(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, totalQuestions]);

  const handleTimeout = useCallback(() => {
    setTimerRunning(false);
    setAnswered(true);
    const states: AnswerState[] = currentQuestion.answers.map((a) =>
      a.correct ? "correct" : "idle"
    );
    setAnswerStates(states);
    setTimeout(goNext, 2000);
  }, [currentQuestion, goNext]);

  useEffect(() => {
    if (!timerRunning || answered) return;
    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, timerRunning, answered, handleTimeout]);

  const handleAnswer = useCallback(
    (index: number) => {
      if (answered) return;
      setTimerRunning(false);
      setAnswered(true);

      const isCorrect = currentQuestion.answers[index].correct;
      const states: AnswerState[] = currentQuestion.answers.map((a, i) => {
        if (i === index) return isCorrect ? "correct" : "wrong";
        if (a.correct) return "correct";
        return "idle";
      });
      setAnswerStates(states);

      if (isCorrect) {
        setPoints((p) => p + calculateScore(timeLeft));
      }

      setTimeout(goNext, 1800);
    },
    [answered, currentQuestion, timeLeft, goNext]
  );

  const restart = useCallback(() => {
    setCurrentIndex(0);
    setPoints(0);
    setGameOver(false);
  }, []);

  return {
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
  };
}
