const TextInput = (props) => {
  return (
    <div className="form-input">
      <label htmlFor="textInput" className="input-label">
        {props.label}
      </label>
      <input
        id="textInput"
        type="text"
        className="input-field"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
};

export default TextInput;
