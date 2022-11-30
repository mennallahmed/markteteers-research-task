import React from 'react'
import ReadMore from "./ReadMore";

const Content = (text) => {
  return (
    <div className="readMore-container">
      <ReadMore desc={text}/>
    </div>
  );
  };
  
export default Content;