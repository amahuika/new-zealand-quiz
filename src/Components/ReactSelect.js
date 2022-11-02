import Select from "react-select";
import "./ReactSelect.css";

function ReactSelect(props) {
  const onChangeHandle = (e) => {
    props.onChangeHandle(e.value);
  };

  return (
    <div className="select">
      <div className="select-container">
        <Select
          options={props.options}
          placeholder={"Select your answer"}
          value={props.selectedAnswer}
          onChange={onChangeHandle}
          isSearchable={false}
        />
      </div>
    </div>
  );
}
export default ReactSelect;
