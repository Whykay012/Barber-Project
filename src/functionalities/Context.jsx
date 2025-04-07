import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
  SHOW_ACCORDION,
  BLOG_DROPDOWN,
  LOGIN_UPDATE,
  SET_PAGE,
  RESET_EMAIL,
  SET_EMAIL,
  SET_SEARCH_TERM,
  RESET,
  SET_ERROR,
  UPDATE_LOCATION,
  SUBMIT_FORM_CONTACT,
  UPDATE_FIELD_CONTACT,
} from "./action";
import { blogData } from "../sub-pages/blogData";
const appContext = createContext();

export const useContextFunc = () => useContext(appContext);

const initialState = {
  accordion: null,
  accounts: [],
  blogDropdown: false,
  loggedInUser: null,
  name: "",
  email: "",
  newsletterEmail: "",
  phone: "",
  address: "",
  dob: "",
  comment: "",
  website: "",
  sex: "",
  password: "",
  confirmPassword: "",
  currentPage: 1,
  itemsPerPage: 3,
  searchTerm: "",
  filteredData: blogData,
  expanded: false,
  position: [6.5244, 3.3792], // Default to Lagos, Nigeria
  error: null,
  tracking: true,
  contactname: "",
  contactemail: "",
  contactsubject: "",
  contactcomment: "",
  contactsubmitted: false,
  contacterror: null,
};
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleAccordion = (index) => dispatch({ type: SHOW_ACCORDION, index });

  const dropDown = (isVisible) =>
    dispatch({ type: BLOG_DROPDOWN, payload: isVisible });

  const handleInputChange = (dispatch, field) => (e) => {
    // const { name, value } = e.target;
    dispatch({ type: LOGIN_UPDATE, field: field, value: e.target.value });
  };

  // const handleSubmitComment = () => {
  //   e.preventDefault();
  //   dispatch({ type: RESET });
  // };

  // const handlePageChange = (page) => {
  //   if (page > 0 && page <= totalPages)
  //     dispatch({ type: SET_PAGE, payload: page });
  // };

  useEffect(() => {
    if (navigator.geolocation && state.tracking) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          dispatch({
            type: UPDATE_LOCATION,
            payload: [position.coords.latitude, position.coords.longitude],
          });
        },
        (error) => {
          dispatch({ type: SET_ERROR, payload: error.message });
        },
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, [state.tracking]);

  const handleSearchChange = (e) => {
    dispatch({ type: SET_SEARCH_TERM, payload: e.target.value });
  };

  // Handle search button click
  const handleSearchClick = () => {
    dispatch({ type: SET_SEARCH_TERM, payload: searchTerm });
    dispatch({ type: SET_PAGE, payload: 1 }); // Reset to page 1 after search
  };
  const handleSubmitEmail = (e) => {
    e.preventDefault(); // Prevent page reload
    dispatch({ type: RESET_EMAIL }); // Reset email input
    alert(`Subscribed with:, ${newsletterEmail}`); // Handle subscription logic
  };

  const handleChange = (e) => {
    dispatch({ type: SET_EMAIL, payload: e.target.value });
  };

  const handleChangeContact = (e) => {
    dispatch({
      type: UPDATE_FIELD_CONTACT,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    dispatch({ type: SUBMIT_FORM_CONTACT });
  };
  return (
    <appContext.Provider
      value={{
        ...state,
        handleChangeContact,
        handleSubmitContact,
        toggleAccordion,
        dropDown,
        // handleSubmitComment,
        handleInputChange,
        dispatch,
        handleSearchClick,
        handleSearchChange,
        handleSubmitEmail,
        handleChange,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default Context;
