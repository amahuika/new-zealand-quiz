import React, { useEffect, useState } from "react";

import Quiz from "./assets/QuizData";
import Swal from "sweetalert2";
import Header from "./Components/Header";
import DropdownOptions from "./Components/DropdownOptions";

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

  //start new game function
  const startGame = () => {
    setGameStarted(true);
    setCorrectAnswerCount(0);
    newQuestion();
  };

  // gets new question from allData
  const newQuestion = (e) => {
    const length = allData.length;
    let randNum;
    // creates a random number to get a question from game data
    do {
      randNum = Math.floor(Math.random() * length);
      // checks if that number has already been chosen so we dont repeat questions
    } while (questionCounter.includes(randNum));

    // adds random number to question counter arr
    setQuestionCounter((val) => [...val, randNum]);

    // sets questions and answers for drop down based on the random number
    setGameData({
      q: allData[randNum].q + "?",
      a: allData[randNum].a,
      options: allData[randNum].options,
    });

    // stops game once 15 numbers are in the array meaning 15 questions has been asked
    if (questionCounter.length === 15) {
      setGameStarted(false);
      setQuestionCounter([]);
    }
  };

  // checks if answer is correct or not then fires a sweet alert
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
      <Header
        gameStarted={gameStarted}
        OnStartGame={startGame}
        correctAnswerCount={correctAnswerCount}
      />

      {gameStarted && (
        <DropdownOptions
          numberForQuestion={questionCounter.length}
          answerData={answerData}
          AnswerHandler={AnswerHandler}
          question={gameData.q}
        />
      )}
    </React.Fragment>
  );
}

export default App;
