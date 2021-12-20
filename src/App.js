import React, { useState } from "react";
import "./App.css";
import data from "./Data";
import SingleQuestion from "./components/SingleQuestion";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <header className="App-header">
        <div className="questionsCard">
          <p className="title">Questions And Answers About Login</p>
          <section>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;
