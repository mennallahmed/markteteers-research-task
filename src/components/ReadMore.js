import React, { useState } from "react";
import "../styles/ReadMore.css";

const ReadMore = ({ desc }) => {
  const text = desc.text;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {/*Show limit of 150 character when isReadMore is true */}
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? ".read more" : " show less"}
      </span>
    </p>
  );
};
export default ReadMore;