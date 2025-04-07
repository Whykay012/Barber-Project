import {
  BLOG_DROPDOWN,
  LOGIN,
  LOGIN_UPDATE,
  LOGOUT,
  NEXT_PAGE,
  PREV_PAGE,
  REGISTER_ACCOUNT,
  SET_PAGE,
  SHOW_ACCORDION,
  SET_SEARCH_TERM,
  SET_EMAIL,
  RESET_EMAIL,
  TOGGLE_EXPAND,
  RESET,
  TOGGLE_TRACKING,
  SET_ERROR,
  UPDATE_LOCATION,
  UPDATE_FIELD_CONTACT,
  SUBMIT_FORM_CONTACT,
} from "./action";

const reducer = (state, action) => {
  if (action.type === SHOW_ACCORDION) {
    return {
      ...state,
      accordion: state.accordion === action.index ? null : action.index,
    };
  }

  if (action.type === BLOG_DROPDOWN) {
    return {
      ...state,
      blogDropDown: action.payload,
    };
  }
  if (action.type === REGISTER_ACCOUNT) {
    return {
      ...state,
      accounts: [...state.accounts, action.payload],
    };
  }
  if (action.type === LOGIN) {
    const user = state.accounts.find((account) => {
      account.email === action.payload.email &&
        account.password === action.payload.password;
    });
    if (user) {
      return {
        ...state,
        loggedInUser: user,
      };
    } else {
      alert("Invalid Email or Password");
      return state;
    }
  }

  if (action.type === UPDATE_FIELD_CONTACT) {
    return { ...state, [action.field]: action.value };
  }

  if (action.type === SUBMIT_FORM_CONTACT) {
    if (
      !state.contactname ||
      !state.contactemail ||
      !state.contactsubject ||
      !state.contactcomment
    ) {
      return { ...state, contacterror: "All fields are required" };
    }
    return { ...state, contactsubmitted: true }; // Reset form and show success message
  }

  if (action.type === UPDATE_LOCATION) {
    return { ...state, position: action.payload, error: null };
  }

  if (action.type === SET_ERROR) {
    return { ...state, error: action.payload };
  }

  if (action.type === TOGGLE_TRACKING) {
    return { ...state, tracking: !state.tracking };
  }

  if (action.type === LOGOUT) {
    return {
      ...state,
      loggedInUser: null,
    };
  }
  if (action.type === LOGIN_UPDATE) {
    return {
      ...state,
      [action.field]: action.value,
    };
  } else if (action.type === RESET) {
    return initialState;
  }
  if (action.type === NEXT_PAGE) {
    return { ...state, currentPage: state.currentPage + 1 };
  }

  if (action.type === PREV_PAGE) {
    return { ...state, currentPage: Math.max(state.currentPage - 1, 1) };
  }

  if (action.type === SET_PAGE) {
    return { ...state, currentPage: action.payload };
  }
  if (action.type === SET_SEARCH_TERM) {
    return { ...state, searchTerm: action.payload, currentPage: 1 };
  }
  if (action.type === SET_EMAIL) {
    return { ...state, newsletterEmail: action.payload };
  } else if (action.type === RESET_EMAIL) {
    return { ...state, newsletterEmail: "" };
  }
  if (action.type === TOGGLE_EXPAND) {
    return { expanded: !state.expanded };
  }
  throw new Error(`Invalid Action ${action.type} in ${state.accordion}`);
};

export default reducer;
