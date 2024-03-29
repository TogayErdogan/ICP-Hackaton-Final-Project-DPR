import Category from "./Category/Category";
import Price from "./Price/Price";
import Ram from "./Ram/Ram";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1><a href="/">DPR</a></h1>
        </div>
        <Category handleChange={handleChange} />
        {/* <Price handleChange={handleChange} /> */}
        <Ram handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
