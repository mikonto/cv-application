import GeneralInformation from "./GeneralInformation";
import StudyInformation from "./StudyInformation";
import WorkInformation from "./WorkInformation";

const EditSection = (props) => {
  return (
<div className={`edit-section ${props.editMode ? "open" : "closed"}`}>
      <GeneralInformation
        generalInfoDraftData={props.generalInfoDraftData}
        onChange={props.handleGeneralInfoChange}
      />
      <StudyInformation
        studiesDraftData={props.studiesDraftData}
        addStudy={props.addStudy}
        removeStudy={props.removeStudy}
        handleStudiesChange={props.handleStudiesChange}
      />
      <WorkInformation
        worksDraftData={props.worksDraftData}
        addWork={props.addWork}
        removeWork={props.removeWork}
        handleWorksChange={props.handleWorksChange}
      />
      <button className="button" onClick={props.handleSaveClick}>Save</button>
    </div>
  );
};

export default EditSection;
