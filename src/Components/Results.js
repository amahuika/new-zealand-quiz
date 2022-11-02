import "./Results.css";

function Results(props) {
  return (
    <div className="score-container">
      <div className="score">
        <h1>
          Score<span className="result">{props.correctAnswerCount}/15</span>
        </h1>
      </div>
    </div>
  );
}
export default Results;
