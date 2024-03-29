import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Brand</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="apple"
          title="Apple"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="samsung"
          title="Samsung"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="xiaomi"
          title="Xiaomi"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="reeder"
          title="Reeder"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
