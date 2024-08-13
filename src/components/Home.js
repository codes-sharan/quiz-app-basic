// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to the Quiz App</h2>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
