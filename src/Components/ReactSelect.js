import Select from "react-select";
import "./ReactSelect.css";

function ReactSelect(props) {
  const onChangeHandle = (e) => {
    props.onChangeHandle(e.value);
  };

  return (
    <div className="select">
      <Select
        options={props.options}
        placeholder={"Select your answer"}
        value={props.selectedAnswer}
        width="300px"
        onChange={onChangeHandle}
      />
    </div>
  );
}
export default ReactSelect;
