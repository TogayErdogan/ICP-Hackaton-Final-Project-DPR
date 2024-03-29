import "./Ram.css";
import Input from "../../components/Input";

const Ram = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">RAM Capacity</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="4gb"
          title="4 GB"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="6gb"
          title="6 GB"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="8gb"
          title="8 GB"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="12gb"
          title="12 GB"
          name="test1"
        />

        {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> */}
      </div>
    </>
  );
};

export default Ram;
