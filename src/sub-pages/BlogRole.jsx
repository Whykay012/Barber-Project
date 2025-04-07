import post_10 from "../assets/images/post_10.jpg";
import post_5 from "../assets/images/post_5.jpg";
import post_6 from "../assets/images/post_6.jpg";
import post_7 from "../assets/images/post_7.jpg";
import post_8 from "../assets/images/post_8.jpg";
import post_9 from "../assets/images/post_9.jpg";
import { postData } from "./blogData";
import { useContextFunc } from "../functionalities/Context";

const BlogRole = () => {
  const {
    handleSearchClick,
    handleSearchChange,
    searchTerm,
    handleSubmitEmail,
    newsletterEmail,

    handleChange,
  } = useContextFunc();
  return (
    <div className="second-role">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="search keyboard..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={() => handleSearchClick(searchTerm)}>Search</button>
      </div>
      <div className="category">
        <ul>
          <li>
            <h2>Category</h2>
            <hr />
          </li>
          <li>
            <p>Restuarant Food(37)</p>
            <hr />
          </li>
          <li>
            <p>Travel News(10)</p>
            <hr />
          </li>
          <li>
            <p>Modern Technology(03)</p>
            <hr />
          </li>
          <li>
            <p>Product(11)</p>
            <hr />
          </li>
          <li>
            <p>Inspiration(21)</p>
            <hr />
          </li>
          <li>
            <p>Health Care(21)</p>
          </li>
        </ul>
      </div>
      <div className="recent-post">
        <h4>Recent Post</h4>
        <hr />
        {postData.map((post, index) => {
          const { img, title, time } = post;
          return (
            <div className="posting" key={index}>
              <div className="post-image">
                <img src={img} alt={title} />
              </div>
              <div className="post-others">
                <p>{title}</p>
                <p>{time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="tags">
        <div className="tag-title">
          <h4>Tag Clouds</h4>
          <hr />
        </div>
        <div className="tags-topics">
          <button>project</button>
          <button>love</button>
          <button>technology</button>
          <button>travel</button>
          <button>restuarant</button>
          <button>life style</button>
          <button>design</button>
          <button>illustration</button>
        </div>
      </div>
      <div className="instagram">
        <div className="feeds">
          <h4>Instagram Feeds</h4>
          <hr />
        </div>
        <div className="feed-img">
          <img src={post_5} alt="POST_5" />
          <img src={post_6} alt="POST_6" />
          <img src={post_7} alt="POST_7" />
          <img src={post_8} alt="POST_8" />
          <img src={post_9} alt="POST_9" />
          <img src={post_10} alt="POST_10" />
        </div>
      </div>
      <div className="newsletter">
        <h4>Newsletter</h4>
        <hr />
        <div className="email-form">
          <form action="email" onSubmit={() => handleSubmitEmail()}>
            <div className="form-email-input">
              <input
                type="email"
                name="email"
                id="email"
                value={newsletterEmail}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
            <button className="form-email-btn" type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogRole;
