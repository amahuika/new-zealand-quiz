import React, { useEffect, useState } from "react";
import "./App.css";

import ReactSelect from "./Components/ReactSelect";
import Button from "./Components/UI/Button";
import Quiz from "./assets/QuizData";
import Swal from "sweetalert2";
import Card from "./Components/UI/Card";

function App() {
  const [gameData, setGameData] = useState([{ q: "", a: "", options: [] }]);
  const [answerData, setAnswerData] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionCounter, setQuestionCounter] = useState([]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const allData = Quiz;

  useEffect(() => {
    console.log(gameData);
    if (gameStarted) {
      const selections = gameData.options.map((item) => {
        return {
          value: item,
          label: item,
        };
      });
      setAnswerData(selections);
    }
  }, [gameData, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setCorrectAnswerCount(0);
    newQuestion();
  };

  const newQuestion = (e) => {
    const length = allData.length;
    let randNum;
    do {
      randNum = Math.floor(Math.random() * length);
    } while (questionCounter.includes(randNum));

    setQuestionCounter((val) => [...val, randNum]);

    setGameData({
      q: allData[randNum].q + "?",
      a: allData[randNum].a,
      options: allData[randNum].options,
    });

    if (questionCounter.length === 15) {
      setGameStarted(false);
      setQuestionCounter([]);
    }
  };

  const AnswerHandler = (userAnswer) => {
    if (userAnswer === gameData.a) {
      Swal.fire({
        title: "Correct!",
        icon: "success",
        html: `<b>Question</b><br/>
        ${gameData.q}<br/>
        <b>Your answer:</b> ${userAnswer}
        `,
        confirmButtonText: "Next question",
        confirmButtonColor: "green",
      }).then(() => {
        newQuestion();
      });
      setCorrectAnswerCount((prev) => {
        return prev + 1;
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect!",
        html: `<b>Question</b><br/>
        ${gameData.q}<br/>
        <b>Your answer:</b> ${userAnswer}<br/>
        <hr/>
        <b>Correct answer:</b> ${gameData.a}
        `,
        confirmButtonText: "Next question",
        confirmButtonColor: "red",
      }).then(() => {
        newQuestion();
      });
    }
  };

  return (
    <React.Fragment>
      <div className="App-header">
        <h1>New Zealand Quiz</h1>

        {!gameStarted && (
          <React.Fragment>
            <p>Test your New Zealand knowledge</p>
            <Button label="Start Quiz" onClickHandler={startGame} />
            {correctAnswerCount > 0 && (
              <Card>
                <h1 style={{ marginTop: "10px", marginBottom: "2px" }}>
                  Results
                </h1>
                <h2 style={{ marginTop: "2px", marginBottom: "2px" }}>
                  {correctAnswerCount}/15
                </h2>
              </Card>
            )}
          </React.Fragment>
        )}
      </div>
      {gameStarted && (
        <div className="questions">
          <h3>{gameData.q}</h3>
          <ReactSelect
            options={answerData}
            onChangeHandle={AnswerHandler}
            selectedAnswer={""}
          />
          <p>{}</p>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
