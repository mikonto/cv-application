import Work from "./Work";

const WorkInformation = (props) => {
  return (
    <div>
      <div className="work-info-title">
        <h2>Work information</h2>
        <span className="material-icons" onClick={props.addWork}>
          add
        </span>
      </div>
      {props.worksDraftData.length > 0
        ? props.worksDraftData.map((work) => (
            <Work
              key={work.id}
              work={work}
              removeWork={() => props.removeWork(work.id)}
              onChange={(event) => props.handleWorksChange(work.id, event)}
            />
          ))
        : "None"}
    </div>
  );
};

export default WorkInformation;
