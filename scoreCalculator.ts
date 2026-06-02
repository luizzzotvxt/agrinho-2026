export const TIMER_SECONDS = 20;
export const POINTS_PER_QUESTION = 100;

export function calculateScore(timeLeft: number): number {
  return Math.max(10, Math.ceil((timeLeft / TIMER_SECONDS) * POINTS_PER_QUESTION));
}

export function getPercentage(points: number, totalQuestions: number): number {
  return Math.round((points / (totalQuestions * POINTS_PER_QUESTION)) * 100);
}

export function getPerformanceLabel(percentage: number): string {
  if (percentage >= 80) return "Especialista AgroTech!";
  if (percentage >= 50) return "Bom conhecimento!";
  return "Continue aprendendo!";
}

export function getPerformanceEmoji(percentage: number): string {
  if (percentage >= 80) return "🏆";
  if (percentage >= 50) return "🌱";
  return "📚";
}
