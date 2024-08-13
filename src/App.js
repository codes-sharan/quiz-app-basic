import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';

const questions = [
  { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
  { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
  // Add more questions as needed
];

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quiz"
            element={
              <Quiz
                score={score}
                setScore={setScore}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                questions={questions}
              />
            }
          />
          <Route path="/results" element={<Results score={score} totalQuestions={questions.length} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
