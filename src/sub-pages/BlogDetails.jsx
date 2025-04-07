import React from "react";
import BlogRole from "./BlogRole";
import { MdMessage } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import blogImg from "../assets/images/h1_hero1.jpg";
import singleBlog from "../assets/images/single_blog_1.jpg";
import post_10 from "../assets/images/post_10.jpg";
import single_blog_4 from "../assets/images/single_blog_4.jpg";
import author from "../assets/images/author.png";
import ReadMore from "./ReadMore";
import {
  FaFacebook,
  FaTwitter,
  FaBehance,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import { commentData } from "./blogData";
import { useContextFunc } from "../functionalities/Context";

const handleSubmitComment = () => {
  e.preventDefault();
  alert(`Post Successfully Made`);
  dispatch({ type: RESET });
};
const BlogDetails = () => {
  const {
    comment,
    handleInputChange,
    email,
    name,
    dispatch,
    website,
    // handleSubmitComment,
  } = useContextFunc();
  return (
    <div className="main-blogs-details">
      <div className="hero-detailsss">
        <h1>Blog Details</h1>
        <img src={blogImg} alt="BLOG DETAILS HERO" />
      </div>
      <div className="blog-details-role">
        <div className="details-role1">
          <div className="blog-details-contact">
            <img src={singleBlog} alt="SINGLE BLOG" />
            <div>
              <ReadMore limit={50} />
              <div className="commentsss">
                <p>
                  <IoMdContacts style={{ fontSize: "1.2rem" }} />
                  Travel, Lifestyle
                </p>
                <p>|</p>
                <p>
                  <MdMessage style={{ fontSize: "1.2rem" }} />
                  15 Comments
                </p>
              </div>
            </div>
            <div className="blog-content">
              <p>
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction of the camp price. However, who has the willpower.
                <br />
                <br />
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training. who has the
                willpower to actually
              </p>
            </div>
            <div className="highighted-details">
              <p>
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training.
              </p>
            </div>

            <div className="blog-content">
              <p>
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction of the camp price. However, who has the willpower.
                <br />
                <br />
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training. who has the
                willpower to actually
              </p>
            </div>
            <hr />
            <div className="like">
              <div className="reactions">
                <p className="hearts">
                  <FaHeart />
                </p>
                <p className="people">Lily and 4 people like this</p>
              </div>
              <div className="social-links">
                <a href="https://facebook.com">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com">
                  <FaTwitter />
                </a>
                <a href="https://google.com">
                  <FaGlobe />
                </a>
                <a href="https://behance.com">
                  <FaBehance />
                </a>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="prev-post">
              <div className="prevImg">
                <img src={post_10} alt="PREV POST IMAGE" />
                <FaArrowLeft />
              </div>
              <div className="prev-content">
                <p>Prev Post</p>
                <h5>Space The Final Frontier</h5>
              </div>
            </div>
            <div className="next-post">
              <div className="next-img">
                <img src={single_blog_4} alt="NEXT POST IMAGE" />
                <FaArrowRight />
              </div>
              <div className="prev-content">
                <p>Next Post</p>
                <h5>Telescopes 101</h5>
              </div>
            </div>
          </div>
          <div className="author">
            <div className="author-img">
              <img src={author} alt="AUTHOR MAGE" />
            </div>
            <div className="about-author">
              <h4>Harvard Milan</h4>
              <p>
                Second divided from form fish beast made. Every of seas all
                gathered use saying you're, he our dominion twon Second divided
                from
              </p>
            </div>
          </div>
          <hr />
          <div className="author-comments">
            <h2>05 Comments</h2>
            {commentData.map((data, index) => {
              const { comment, img, name, timeline } = data;
              return (
                <div key={index} className="main-comments">
                  <div className="comment-image">
                    <img src={img} alt={name} />
                  </div>
                  <div className="comment-content">
                    <p>{comment}</p>
                    <div className="name-time">
                      <div className="name-timeline">
                        <h4>{name}</h4>
                        <p>{timeline}</p>
                      </div>
                      <p>REPLY</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="reply-section">
            <div className="text-area">
              <form onSubmit={() => handleSubmitComment()}>
                <label htmlFor="comment">Leave Reply</label>
                <textarea
                  type="text"
                  name="comment"
                  id="comment"
                  value={comment}
                  onChange={handleInputChange(dispatch, "comment")}
                  placeholder="Write Comment"
                />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="forms"
                  value={name}
                  onChange={handleInputChange(dispatch, "name")}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleInputChange(dispatch, "email")}
                  placeholder="Email"
                />
                <input
                  type="url"
                  name="website"
                  id="website"
                  value={website}
                  onChange={handleInputChange(dispatch, "website")}
                  placeholder="Website"
                  className="form-url"
                />
                <button type="submit">Post Comment</button>
              </form>
            </div>
          </div>
        </div>
        <div className="role-2">
          <BlogRole />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
