import Study from "./Study";

const StudyInformation = (props) => {
  return (
    <div>
      <div className="study-info-title">
        <h2>Study information</h2>
        <span className="material-icons" onClick={props.addStudy}>
          add
        </span>
      </div>
      {props.studiesDraftData.length > 0
        ? props.studiesDraftData.map((study) => (
            <Study
              key={study.id}
              study={study}
              removeStudy={() => props.removeStudy(study.id)}
              onChange={(event) => props.handleStudiesChange(study.id, event)}
            />
          ))
        : "None"}
    </div>
  );
};

export default StudyInformation;
