import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
import QuestionCard from './components/QuestionCard';
import { GlobalStyle, Wrapper } from './App.styles'

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnwer: string
}

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions)
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM);
    setQuestions(newQuestions);
    setScore(0);
    setNumber(0);
    setLoading(false)
  }

  const checkAnswere = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    const correct = questions[number].correct_answer === answer;

    correct && setScore(prevScore => prevScore + 1);

    const answerObject: AnswerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnwer: questions[number].correct_answer
    };

    setUserAnswers(prevState => [...prevState, answerObject])
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    nextQuestion === TOTAL_QUESTIONS ? setGameOver(true) : setNumber(prevNum => prevNum + 1)
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Test you sports trivia knowledge</h1>

        {
          gameOver || userAnswers.length === TOTAL_QUESTIONS ?
            (<button className="start" onClick={startTrivia}>Start!</button>) :
            null
        }

        {!gameOver && <p className="score">Score:{score}</p>}

        {loading && <p>Loading Questions...</p>}

        {
          !loading && !gameOver && (
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers && userAnswers[number]}
              callback={checkAnswere}
            />
          )
        }

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>Next</button>
        ) : null}

      </Wrapper>
    </>
  );
}

export default App;
