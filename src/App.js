import React, { useEffect, useState } from "react";
import "./App.css";

import ReactSelect from "./Components/ReactSelect";
import Button from "./Components/UI/Button";
import Quiz from "./assets/QuizData";
import Swal from "sweetalert2";

function App() {
  const [gameData, setGameData] = useState([{ q: "", a: "", options: [] }]);
  const [answerData, setAnswerData] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const allData = Quiz;

  useEffect(() => {
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

  const newGameHandlerButton = (e) => {
    let length = allData.length;
    let rand = Math.floor(Math.random() * length);
    setGameData({
      q: allData[rand].q + "?",
      a: allData[rand].a,
      options: allData[rand].options,
    });
    setGameStarted(true);
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
        newGameHandlerButton();
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
        newGameHandlerButton();
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
            <Button label="Start Quiz" onClickHandler={newGameHandlerButton} />
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
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
