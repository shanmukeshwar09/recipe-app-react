import React from "react";

export const Recipe = ({ title, image, calories }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="Image not found !" />
    </div>
  );
};
