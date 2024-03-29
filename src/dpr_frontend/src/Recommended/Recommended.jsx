import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="apple" title="Apple" />
          <Button onClickHandler={handleClick} value="samsung" title="Samsung" />
          <Button onClickHandler={handleClick} value="xiaomi" title="Xiaomi" />
          <Button onClickHandler={handleClick} value="reeder" title="Reeder" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
