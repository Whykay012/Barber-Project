import { NavLink } from "react-router-dom";
import { useContextFunc } from "../functionalities/Context";
import "./blog.css";
const dropdownItems = [
  { name: "Blog", route: "/blog" },
  { name: "Blog Details", route: "/blogdetails" },
  { name: "Element", route: "/element" },
];
const BlogDisplay = () => {
  const { dropDown, blogDropDown } = useContextFunc();

  return (
    <div
      className="blog-container"
      onMouseEnter={() => dropDown(true)}
      onMouseLeave={() => dropDown(false)}
    >
      <NavLink className="blog-link"> Blog</NavLink>
      {blogDropDown && (
        <ul className="blog-dropdown">
          {dropdownItems.map((items, index) => (
            <li className="blog-item" key={index}>
              <NavLink to={items.route} className="blog-items-link">
                {items.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogDisplay;
