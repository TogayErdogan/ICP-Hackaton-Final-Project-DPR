import { FiHeart } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import "./Nav.css";
import { Link } from "react-router-dom";


const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter a product name."
        />
      </div>
      <div className="profile-container">
        
        {/* <a href="/favorites">
          <FiHeart className="nav-icons" />
        </a>
         */}
        <Link to={"/login"}>
          <CiLogout className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
