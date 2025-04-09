import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // New state for dropdown visibility

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setAccordionOpen(false); // reset accordion on large screens
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = () => {
    if (isMobile) {
      setAccordionOpen((prev) => !prev);
    }
  };

  // Handle dropdown visibility
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsDropdownVisible(true);
      dropDown(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsDropdownVisible(false);
      dropDown(false);
    }
  };

  return (
    <div className="blog-pos">
      {/* Blog trigger */}
      <div
        className="blog-container"
        onMouseEnter={handleMouseEnter} // Show dropdown on hover for desktop
        onMouseLeave={handleMouseLeave} // Hide dropdown on mouse leave for desktop
        onClick={toggleAccordion} // Toggle accordion on click for mobile
      >
        <span className="blog-link">Blog</span>
        {isMobile && (
          <button className="accordion2-btn" aria-label="Toggle Blog Submenu">
            {accordionOpen ? "-" : "+"}
          </button>
        )}
      </div>

      {/* Mobile inline links (added to navbar) */}
      <div className="mobile">
        {isMobile &&
          accordionOpen &&
          dropdownItems.map((item, index) => (
            <NavLink key={index} to={item.route} className="blog-items-link">
              {item.name}
            </NavLink>
          ))}
      </div>

      {/* Desktop dropdown links (floated dropdown style) */}
      {!isMobile && isDropdownVisible && (
        <ul
          className="blog-dropdown"
          onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over it
          onMouseLeave={handleMouseLeave} // Hide dropdown when mouse leaves
        >
          {dropdownItems.map((item, index) => (
            <li className="blog-item" key={index}>
              <NavLink to={item.route} className="blog-items-link">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogDisplay;
