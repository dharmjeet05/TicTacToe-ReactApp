import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

export const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon bg-circle" />;
    case "cross":
      return <FaTimes className="icon bg-cross" />;
    default:
      return <FaPen className="icon" />;
  }
};
