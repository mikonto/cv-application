import TextInput from "./TextInput";

const Study = (props) => {
  return (
    <div className="study">
      <div>
        <TextInput
          label="Field of study: "
          name="fieldOfStudy"
          value={props.study.fieldOfStudy}
          onChange={props.onChange}
        />
        <TextInput
          label="Institution: "
          name="institution"
          value={props.study.institution}
          onChange={props.onChange}
        />
        <TextInput
          label="Year: "
          name="year"
          value={props.study.year}
          onChange={props.onChange}
        />
      </div>
      <span className="material-icons" onClick={props.removeStudy}>
        delete
      </span>
    </div>
  );
};

export default Study;
