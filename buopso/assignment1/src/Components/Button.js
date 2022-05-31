function Button(props) {
  return (
    <div>
      <button onClick={() => props.count(props.a)}>{props.a}</button>
    </div>
  );
}
export default Button;
