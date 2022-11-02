import ReactSelect from "./ReactSelect";

function DropdownOptions(props) {
  const changeHandle = (userInput) => {
    props.AnswerHandler(userInput);
  };

  return (
    <div className="question-container">
      <div className="questions">
        <h3>
          {props.numberForQuestion}. {props.question}
        </h3>
      </div>

      <ReactSelect
        options={props.answerData}
        onChangeHandle={changeHandle}
        selectedAnswer={""}
      />
    </div>
  );
}
export default DropdownOptions;
