import { TIMER_SECONDS } from "../utils/scoreCalculator";

interface ProgressBarProps {
  animKey: number;
}

export default function ProgressBar({ animKey }: ProgressBarProps) {
  return (
    <div className="progress-track">
      <div
        key={`bar-${animKey}`}
        className="progress-bar"
        style={{ animation: `barShrink ${TIMER_SECONDS}s linear forwards` }}
      />
    </div>
  );
}
