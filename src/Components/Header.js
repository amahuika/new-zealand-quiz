import React from "react";
import Button from "./UI/Button";
import Results from "./Results";
import "../App.css";

function Header(props) {
  const startGameHandler = (params) => {
    return props.OnStartGame();
  };

  return (
    <div className="App-header">
      <h1>New Zealand Quiz</h1>
      {!props.gameStarted && (
        <React.Fragment>
          <p>Test your New Zealand knowledge with 15 random questions</p>
          <Button label="Start Quiz" onClickHandler={startGameHandler} />
          {props.correctAnswerCount > 0 && (
            <Results correctAnswerCount={props.correctAnswerCount} />
          )}
        </React.Fragment>
      )}
    </div>
  );
}
export default Header;
