function Label(props) {
  return (
    <div>
      {props.x == 1 ? (
        <label>Counter:{props.Counter}</label>
      ) : (
        <label>sum:{props.sum}</label>
      )}
    </div>
  );
}
export default Label;
