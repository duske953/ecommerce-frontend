export default function Input(props) {
  return (
    <div className="input-box">
      <label className="label" htmlFor={props.inputId}>
        {props.label}
      </label>
      {props.children}
      <input
        id={props.inputId}
        className="input"
        type={props.type}
        placeholder={props.placeholder}
        name={props.inputId}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}
