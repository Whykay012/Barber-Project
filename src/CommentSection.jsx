import { customers } from "./pages/home/homeData";
import StarRating from "./pages/home/StarRating";

const CommentSection = () => {
  return (
    <div className="comment">
      <div className="comment-titless">
        <div className="line"></div>
        <h1>Customers Say About Us</h1>
      </div>
      <div className="customer-comment">
        {customers.map((customer, index) => {
          const { name, comment, rate, image } = customer;

          return (
            <div className="comment-details" key={index}>
              <div className="rating">
                <StarRating rating={rate} maxStars={5} />
              </div>
              <p className="comments">{comment}</p>
              <div className="customers">
                <img src={image} alt="COSTUMER 1" />
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentSection;
