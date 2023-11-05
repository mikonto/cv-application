import FormInput from "./TextInput";

const GeneralInformation = (props) => {
  return (
    <div>
      <h2>General information</h2>
      <FormInput
        label="Name: "
        name="name"
        value={props.generalInfoDraftData.name}
        onChange={props.onChange}
      />
      <FormInput
        label="Email: "
        name="email"
        value={props.generalInfoDraftData.email}
        onChange={props.onChange}
      />
      <FormInput
        label="Phone: "
        name="phone"
        value={props.generalInfoDraftData.phone}
        onChange={props.onChange}
      />
    </div>
  );
};

export default GeneralInformation;
