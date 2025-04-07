import heroImg from "../assets/images/hero4.jpg";
import Pagination from "./Pagination";
import BlogRole from "./BlogRole";
import "./blog.css";
const Blog = () => {
  return (
    <>
      <header className="home-headerss">
        <div className="containerss">
          <h1>Blog</h1>
          <img src={heroImg} alt="HERO IMAGE" />
        </div>
      </header>

      <div className="blog-main-container">
        <div className="first-role">
          <div>
            <Pagination />
          </div>
        </div>
        <div className="role-2">
          <BlogRole />
        </div>
      </div>
    </>
  );
};

export default Blog;
