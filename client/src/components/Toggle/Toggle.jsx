const Toggle = ({ handleRadioChange, value, catName }) => {
  return (
    <>
      <div className="row">
        <div
          style={{ textAlign: "center", padding: "15px", backgroundColor: "lightgray" }}
          className="col-lg-12"
        >
           <h4 className="heading"
              >
                Create A Record For {catName}
              </h4>
          <form value={value} onChange={handleRadioChange}>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="visual"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Visual Record
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="noVisual"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Text Record
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Toggle;
