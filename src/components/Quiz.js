import React from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz({ score, setScore, currentQuestion, setCurrentQuestion, questions }) {
  const navigate = useNavigate();

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/results');
    }
  };

  return (
    <div>
      <h2>{questions[currentQuestion].question}</h2>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
