import React, { useState, useEffect } from 'react';
import { Box} from '@mui/material';
import Question from '../../components/Question/Question';
import Score from '../../components/Score/Score';

interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
  audioUrl: string;
}

interface QuizProps {
  name: string;
  questions: Question[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  quizStarted:boolean;
  setQuizStarted:React.Dispatch<React.SetStateAction<boolean>>;
}

const Quiz: React.FC<QuizProps> = ({ name, questions, score, setScore,quizStarted,setQuizStarted }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(10);
//   const [quizStarted, setQuizStarted] = useState(false);
  const [isLastq, setIsLastq] = useState(false);
console.log(name);
  useEffect(() => {
    if (quizStarted) {
      const interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            setCurrentQuestionIndex(prevQuestion => prevQuestion + 1);
            return 10;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentQuestionIndex, quizStarted]);

  const handleAnswerClick = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 2 === questions.length) {
      setIsLastq(true);
    }
    setCurrentQuestionIndex(prevQuestion => prevQuestion + 1);
    setTimer(10);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <Box className="card container mt-2 d-flex justify-content-center align-items-center" sx={{ maxWidth: '600px', margin: '0 auto' }}>
      {/* <Typography variant="h3" className="text-success mt-2">GeekForGeeks</Typography> */}
   
      <Box>
        {!quizStarted ? (
          <Box className="card-body">
            {/* <Typography variant="h4" className="card-title">Start Test</Typography> */}
            {/* <Button variant="contained" color="primary" onClick={startQuiz}>
              Start Test
            </Button> */}
          </Box>
        ) : currentQuestionIndex < questions.length ? (
          <Question
            questions={questions}
            handleNextQuestion={handleNextQuestion}
            currentQuestion={currentQuestionIndex}
            handleAnswerClick={handleAnswerClick}
            timer={timer}
            isLastq={isLastq}
            audioUrl={questions[currentQuestionIndex].audioUrl}

          />
        ) : (
          <Score
            score={score}
            setScore={setScore}
            setCurrentQuestion={setCurrentQuestionIndex}
            setQuizStarted={setQuizStarted}
            setIsLastq={setIsLastq}
            setTimer={setTimer}
          />
        )}
      </Box>
    </Box>
  );
};

export default Quiz;
