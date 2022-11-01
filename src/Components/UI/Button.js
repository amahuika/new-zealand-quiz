import "./Button.css";

function Button(props) {
  const clickHandler = (e) => {
    props.onClickHandler(e);
  };

  return (
    <div>
      <button
        type={`${props.type}button`}
        onClick={clickHandler}
        className="myButton"
      >
        {props.label}
      </button>
    </div>
  );
}
export default Button;
