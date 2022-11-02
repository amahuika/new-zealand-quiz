import ReactSelect from "./ReactSelect";

function DropdownOptions(props) {
  const changeHandle = (userInput) => {
    props.AnswerHandler(userInput);
  };

  return (
    <div>
      <h3 className="questions">
        {props.numberForQuestion}. {props.question}
      </h3>

      <ReactSelect
        options={props.answerData}
        onChangeHandle={changeHandle}
        selectedAnswer={""}
      />
    </div>
  );
}
export default DropdownOptions;
