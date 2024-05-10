import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
interface HomeProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  quizStarted: boolean;
  setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<HomeProps> = ({
  name,
  setName,
  setQuizStarted,
  quizStarted,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSubmit = () => {
    if (name.length > 0) {
      setError(false);
      setQuizStarted(true);
      navigate("/quiz");
    } else {
      setError(true);
      return;
    }
  };
  
  return (
    <Grid container spacing={2}>
      {/* Right Half - Image (Displayed at the top on screens below 800px) */}
      <Grid item xs={12} sm={6}>
        <div style={{ textAlign: "center" }}>
          <img
            src="/images/quiz.svg"
            alt="Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </Grid>

      {/* Left Half - Quiz Settings (Displayed at the bottom on screens below 800px) */}
      <Grid item xs={12} sm={6}>
        <div style={{ textAlign: "center" }}>
          {/* <Typography variant="h3" style={{ marginBottom: 20 }}>
            Quiz Settings
          </Typography> */}
          <TextField
            label="Enter Your Name"
            value={name}
            onChange={handleNameChange}
            fullWidth
            style={{ marginBottom: 25,marginTop:20 }}

          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
        {error && <ErrorMessage>Please Fill the Name</ErrorMessage>}
      </Grid>
    </Grid>
  );
};

export default Home;
