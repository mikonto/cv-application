const Expand = (props) => {
  return (
    <div className="expand">
      {props.editMode === false ? (
        <span className="material-icons" onClick={props.toggleEditMode}>
          arrow_forward_ios
        </span>
      ) : (
        <span className="material-icons" onClick={props.toggleEditMode}>
          arrow_back_ios_new
        </span>
      )}
    </div>
  );
};

export default Expand;
