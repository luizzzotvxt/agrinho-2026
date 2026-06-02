import { ReactNode } from "react";

interface QuizCardProps {
  children: ReactNode;
  animKey?: number;
}

export default function QuizCard({ children, animKey }: QuizCardProps) {
  return (
    <div className="quiz-card animate-fade-in" key={animKey}>
      {children}
    </div>
  );
}
