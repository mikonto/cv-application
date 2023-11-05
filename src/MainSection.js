import { useState } from "react";
import EditSection from "./EditSection";
import ContentSection from "./ContentSection";
import Expand from "./Expand";
import { v4 as uuidv4 } from "uuid"; // import UUID for key generation

const MainSection = (props) => {
  const [generalInfoDraftData, setGeneralInfoDraftData] = useState({
    name: "Mikael",
    email: "mikael.kontolampi@gmail.com",
    phone: "+358401234567",
  });

  const [studiesDraftData, setStudiesDraftData] = useState([
    {
      id: uuidv4(),
      fieldOfStudy: "Field of study",
      institution: "Institution",
      year: "2023",
    },
  ]);

  const [worksDraftData, setWorksDraftData] = useState([
    {
      id: uuidv4(),
      workPosition: "Work position",
      company: "Company",
      year: "2023",
    },
  ]);

  const [editMode, setEditMode] = useState(false);

  const [generalInfoDisplayData, setGeneralInfoDisplayData] =
    useState(generalInfoDraftData);
  const [studiesDisplayData, setStudiesDisplayData] =
    useState(studiesDraftData);
  const [worksDisplayData, setWorksDisplayData] = useState(worksDraftData);

  const handleGeneralInfoChange = (event) => {
    const { name, value } = event.target;
    setGeneralInfoDraftData({ ...generalInfoDraftData, [name]: value });
  };

  const addStudy = () => {
    setStudiesDraftData([
      ...studiesDraftData,
      { id: uuidv4(), fieldOfStudy: "", institution: "", year: "" },
    ]);
  };

  const removeStudy = (id) => {
    const updatedStudies = studiesDraftData.filter((study) => study.id !== id);
    setStudiesDraftData(updatedStudies);
  };

  const handleStudiesChange = (id, event) => {
    const { name, value } = event.target;
    setStudiesDraftData((currentStudies) =>
      currentStudies.map((study) =>
        study.id === id ? { ...study, [name]: value } : study
      )
    );
  };

  const addWork = () => {
    setWorksDraftData([
      ...worksDraftData,
      { id: uuidv4(), workPosition: "", company: "", year: "" },
    ]);
  };

  const removeWork = (id) => {
    const updatedWorks = worksDraftData.filter((work) => work.id !== id);
    setWorksDraftData(updatedWorks);
  };

  const handleWorksChange = (id, event) => {
    const { name, value } = event.target;
    setWorksDraftData((currentWorks) =>
      currentWorks.map((work) =>
        work.id === id ? { ...work, [name]: value } : work
      )
    );
  };

  const handleSaveClick = () => {
    setGeneralInfoDisplayData(generalInfoDraftData);
    setStudiesDisplayData(studiesDraftData);
    setWorksDisplayData(worksDraftData);
  };

  const toggleEditMode = () => {
    editMode === false ? setEditMode(true) : setEditMode(false);
    setGeneralInfoDraftData(generalInfoDisplayData);
    setStudiesDraftData(studiesDisplayData);
    setWorksDraftData(worksDisplayData);
  };

  return (
    <div className="main-section">
      <EditSection
        generalInfoDraftData={generalInfoDraftData}
        handleGeneralInfoChange={handleGeneralInfoChange}
        studiesDraftData={studiesDraftData}
        addStudy={addStudy}
        removeStudy={removeStudy}
        handleStudiesChange={handleStudiesChange}
        worksDraftData={worksDraftData}
        addWork={addWork}
        removeWork={removeWork}
        handleWorksChange={handleWorksChange}
        handleSaveClick={handleSaveClick}
        editMode={editMode}
      />

      <Expand editMode={editMode} toggleEditMode={toggleEditMode} />
      <ContentSection
        generalInfoDisplayData={generalInfoDisplayData}
        studiesDisplayData={studiesDisplayData}
        worksDisplayData={worksDisplayData}
      />
    </div>
  );
};

export default MainSection;
