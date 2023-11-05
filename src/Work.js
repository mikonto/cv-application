import TextInput from "./TextInput";

const Work = (props) => {
  return (
    <div className="work">
      <div>
        <TextInput
          label="Work position "
          name="workPosition"
          value={props.work.workPosition}
          onChange={props.onChange}
        />
        <TextInput
          label="Company: "
          name="company"
          value={props.work.company}
          onChange={props.onChange}
        />
        <TextInput
          label="Year: "
          name="year"
          value={props.work.year}
          onChange={props.onChange}
        />
      </div>
      <span className="material-icons" onClick={props.removeWork}>
        delete
      </span>
    </div>
  );
};

export default Work;
