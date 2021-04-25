import BlackButton from "../Button/BlackButton";
import { useState } from "react";
import axios from "axios";

const CatForm = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [date, setDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cat = { cat_name: name, age: age, rescue_date: date };
    axios.post("/cat", cat).then((res) => {
      console.log(res);
      window.location = "/dashboard";
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "60%",
          margin: "auto",
          marginBottom: "300px",
        }}
      >
        <h5>Now enter your cats details</h5>
        <br />
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={{ backgroundColor: "lightgray" }}
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age *</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            style={{ backgroundColor: "lightgray" }}
            type="text"
            className="form-control"
            placeholder="Enter estimated age"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Adoption date *</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            style={{ backgroundColor: "lightgray" }}
            type="date"
            className="form-control"
          />
        </div>
        <BlackButton title="submit" />
        <label
          style={{ float: "right", verticalAlign: "center" }}
          className="form-label"
        >
          * Required Fields
        </label>
      </form>
    </>
  );
};

export default CatForm;
