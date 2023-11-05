import html2pdf from "html2pdf.js";
// Function to download the content as PDF
const downloadPdfDocument = () => {
  const element = document.getElementById("to-pdf"); // The id of the element you want to download as PDF
  const options = {
    margin: 10,
    filename: "my-cv.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  // Now use html2pdf to create the PDF
  html2pdf().from(element).set(options).save();
};
const ContentSection = (props) => {
  return (
    <div className="content-section">
      <div id="to-pdf">
        <h1>Curriculum vitae </h1>
        <h2>General information</h2>
        <div>Name: {props.generalInfoDisplayData.name}</div>
        <div>Email: {props.generalInfoDisplayData.email}</div>
        <div>Phone: {props.generalInfoDisplayData.phone}</div>
        <h2>Study information</h2>{" "}
        {props.studiesDisplayData.length > 0
          ? props.studiesDisplayData.map((study) => (
              <div key={study.id}>
                <div>Field of study: {study.fieldOfStudy}</div>
                <div>Institution: {study.institution}</div>
                <div>Year: {study.year}</div>
                <br></br>
              </div>
            ))
          : "None"}
        <h2>Work information</h2>
        {props.worksDisplayData.length > 0
          ? props.worksDisplayData.map((work) => (
              <div key={work.id}>
                <div>Work position: {work.workPosition}</div>
                <div>Company: {work.company}</div>
                <div>Year: {work.year}</div>
                <br></br>
              </div>
            ))
          : "None"}
      </div>
      <button onClick={downloadPdfDocument}>Download as PDF</button>
    </div>
  );
};

export default ContentSection;
