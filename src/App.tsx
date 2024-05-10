import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import Button from "@mui/material/Button";
// import Loading from "../src/components/Loading/Loading";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Test from "../src/components/Test/Test";
import Home from "../src/Pages/Home/Home";
import Quiz from "../src/Pages/Quiz/Quiz";
import axios from "axios";
// @ts-ignore
import { QuestionProvider } from "./contexts/index.js";
function App() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const retrieveData = async () => {
    const storedData = localStorage.getItem("questions");
    if (storedData === null) {
      const response = await axios.get("/data/initialdata.json");
      localStorage.setItem("questions", JSON.stringify(response.data));
      setQuestions(response.data);
    } else {
      setQuestions(JSON.parse(storedData));
    }
    console.log(questions);
  };

  useEffect(() => {
    retrieveData();
  }, []);
  return (
    <QuestionProvider value={{ questions ,quizStarted,setQuizStarted,score, setScore,name, setName,setQuestions}}>
      <Router>
        <div
          className="App"
          style={{ backgroundImage: 'url("/images/ques1.png")' }}
        >
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  name={name}
                  setName={setName}
                  quizStarted={quizStarted}
                  setQuizStarted={setQuizStarted}
                />
              }
            ></Route>
            <Route
              path="/quiz"
              element={
                <Quiz
                  name={name}
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  quizStarted={quizStarted}
                  setQuizStarted={setQuizStarted}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </QuestionProvider>
  );
}

export default App;
