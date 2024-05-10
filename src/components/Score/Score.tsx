import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface ScoreProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLastq: React.Dispatch<React.SetStateAction<boolean>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

const Score: React.FC<ScoreProps> = ({
  score,
  setScore,
  setCurrentQuestion,
  setQuizStarted,
  setIsLastq,
  setTimer
}) => {
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizStarted(true);
    setIsLastq(false);
    setTimer(10);
  };

  return (
    <Box>
      <Box className="card-body">
        <Typography variant="h4" className="card-title">
          Quiz Completed!
        </Typography>
        <Typography variant="h6" className="card-text">
          Your score: {score}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleRestart}>
          Restart Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Score;
