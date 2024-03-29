import { FiHeart } from "react-icons/fi";
import { BiUpvote, BiDownvote } from "react-icons/bi";

import { Link } from "react-router-dom";

const Card = ({ id, upvotes, downvotes, img, title, reviews, prevPrice, newPrice }) => {
  return (
    <Link to={`/products/${id}`}> 
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
          <BiUpvote style={{color: "green"}} /> : {upvotes}
          <BiDownvote style={{color: "red"}} /> {downvotes}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            {/* <div className="bag">
              <FiHeart className="bag-icon" />
            </div> */}
          </section>
        </div>
      </section>
    </Link>
  );
};

export default Card;
