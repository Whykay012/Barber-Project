import React from "react";
import { useContextFunc } from "../functionalities/Context";
import { TOGGLE_EXPAND } from "../functionalities/action";

const text =
  "Second divided from form fish beast made every of seas all gathered us saying he our.";
const ReadMore = ({ limit = 20 }) => {
  const { expanded, dispatch } = useContextFunc();
  const isTruncated = text && text.length > limit && !expanded;
  const displayText = isTruncated ? text.slice(0, limit) : text;

  return (
    <h1 className="text-displays">
      {displayText}
      {isTruncated ? (
        <span
          // style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
          onClick={() => dispatch({ type: TOGGLE_EXPAND })}
        >
          ...
        </span>
      ) : (
        <span
          // style={{ color: "red", cursor: "pointer", fontWeight: "bold" }}
          onClick={() => dispatch({ type: TOGGLE_EXPAND })}
        >
          read less
        </span>
      )}
    </h1>
  );
};

export default ReadMore;
