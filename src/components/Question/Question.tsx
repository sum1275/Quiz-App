import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

interface QuestionsProps {
  questions: Question[];
  handleNextQuestion: () => void;
  currentQuestion: number;
  handleAnswerClick: (option: string) => void;
  timer: number;
  isLastq: boolean;
  audioUrl: string;
}

const Questions: React.FC<QuestionsProps> = ({
  questions,
  handleNextQuestion,
  currentQuestion,
  handleAnswerClick,
  timer,
  isLastq,
  audioUrl,
}) => {
  console.log(audioUrl);
  const optionIds = ["A", "B", "C", "D"];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const audioRef: any = useRef()

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    handleAnswerClick(option);
  };
  useEffect(() => {
   
    if(audioRef.current){
      audioRef.current.pause();
      audioRef.current.load();
      // audioRef.current.play();
    }
  }, [currentQuestion]);
  return (
    <Box className="container mt-3 bg-light">
      <Box>
        <Box className="card-body">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              className="mt-2 text-warning"
              style={{ marginRight: "7rem" }}
            >
              Time remaining: {timer}
            </Typography>

            <Typography variant="body1" className="mt-2 text-warning">
              <audio controls  ref={audioRef}>
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </Typography>
          </div>

          <Typography variant="h6" className="card-text">
            {/* {questions[currentQuestion].id}.{" "} */}
            {questions[currentQuestion].question}
          </Typography>
          <List>
            {questions[currentQuestion].options.map((option, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  className={`list-group-item list-group-item-action mt-2 ${
                    selectedOption === option ? "active" : ""
                  }`}
                  onClick={() => {
                    console.log("option--", option);
                    handleOptionClick(option);
                    console.log("selected option", selectedOption);
                  }}
                  sx={{
                    background: selectedOption === option ? "white" : "blue",
                    border: "1px solid gray",
                  }}
                >
                  <ListItemText primary={`${optionIds[index]}. ${option}`} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box className="row">
            <Box className="col">
              <Typography variant="body1" className="card-title">
                Question {currentQuestion + 1} of {questions.length}
              </Typography>
            </Box>
            <Box className="col">
              {isLastq ? (
                <Button
                  variant="contained"
                  color="primary"
                  className="btn-sm"
                  onClick={handleNextQuestion}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  className="btn-sm"
                  onClick={handleNextQuestion}
                >
                  Next Question
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
