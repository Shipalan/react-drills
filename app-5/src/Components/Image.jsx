import React from "react";


const Image = (props) => {
  return (
    <div>
      <img src={props.item} alt="Nature"></img>
    </div>
  );
};

export default Image;
