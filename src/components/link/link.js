import React from "react";
import { Link } from "react-router-dom";

export const link = ({ path, text }) => {
  return (
    <li>
      <Link to={`/${path}`}>{text}</Link>
    </li>
  );
};

export default link;
