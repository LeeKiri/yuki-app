const Toggle = ({ handleRadioChange, value }) => {
  return (
    <>
      <div className="row">
        <div
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="col-lg-12"
        >
          <form value={value} onChange={handleRadioChange}>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="visual"
              />
              <label className="form-check-label" for="inlineRadio1">
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
              <label className="form-check-label" for="inlineRadio2">
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
