import { NEXT_PAGE, PREV_PAGE, SET_PAGE } from "../functionalities/action";
import { useContextFunc } from "../functionalities/Context";
import { MdMessage } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { blogData } from "./blogData";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  const { itemsPerPage, currentPage, dispatch, searchTerm } = useContextFunc();

  const filteredData = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages)
      dispatch({ type: SET_PAGE, payload: page });
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch({ type: NEXT_PAGE });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch({ type: PREV_PAGE });
    }
  };

  return (
    <div>
      {/* Blog List */}
      <div className="blog-list">
        {currentItems.map((blog, index) => {
          const { img, title, details, genre, comment, date } = blog;
          return (
            <div className="blog" key={index}>
              <div className="items-blog">
                <div className="items-blog-image">
                  <div>
                    <img src={img} alt={title} />
                  </div>
                  <div className="blog-date">
                    <p>{date}</p>
                  </div>
                </div>
                <div className="blog-display-content">
                  <h1>{title}</h1>
                  <p>{details}</p>
                  <div className="commentsss">
                    <p>
                      <IoMdContacts style={{ fontSize: "1.2rem" }} />
                      {genre}
                    </p>
                    <p>|</p>
                    <p>
                      <MdMessage style={{ fontSize: "1.2rem" }} />
                      {comment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {currentItems.length === 0 && <p>No related blogs topic found.</p>}
        {/* Fallback */}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <div className="prev">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            <MdOutlineKeyboardArrowLeft />
          </button>
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="next">
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
