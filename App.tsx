import { useState } from "react";
import Home from "./pages/Home";
import QuizPage from "./pages/Quiz";
import Ranking from "./pages/Ranking";

type Page = "home" | "quiz" | "ranking";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      {page === "home" && (
        <Home
          onStart={() => setPage("quiz")}
          onRanking={() => setPage("ranking")}
        />
      )}
      {page === "quiz" && (
        <QuizPage onRanking={() => setPage("ranking")} />
      )}
      {page === "ranking" && (
        <Ranking onBack={() => setPage("home")} />
      )}
    </div>
  );
}
