import { useState } from "react";

const questions = [
  {
    question: "React nima?",
    options: ["Kutubxona", "Database", "Server", "Browser"],
    answer: "Kutubxona",
  },
  {
    question: "HTML nimaning qisqartmasi?",
    options: [
      "Hyper Text Markup Language",
      "High Text Language",
      "Home Tool Language",
      "Hyper Tool Markup",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "CSS nima uchun ishlatiladi?",
    options: ["Dizayn", "Database", "Server", "API"],
    answer: "Dizayn",
  },
  {
    question: "JavaScript qanday til?",
    options: ["Programming Language", "Database", "Browser", "OS"],
    answer: "Programming Language",
  },
  {
    question: "React komponentlari nima qaytaradi?",
    options: ["JSX", "CSS", "JSON", "HTML File"],
    answer: "JSX",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);

  const checkAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinish(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setFinish(false);
  };

  if (finish) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1>🎉 Quiz Tugadi!</h1>
          <h2>
            Natija: {score} / {questions.length}
          </h2>
          <button style={styles.button} onClick={restart}>
            Qayta Boshlash
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>
          Savol {current + 1} / {questions.length}
        </h2>

        <h3>{questions[current].question}</h3>

        {questions[current].options.map((item, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => checkAnswer(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg,#4f46e5,#9333ea)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "8px",
    background: "#4f46e5",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },
};