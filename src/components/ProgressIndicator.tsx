import React from "react";
import "./ProgressIndicator.css";

const ProgressIndicator: React.FC = (props) => {
  return <ul className="progress-indicator">{props.children}</ul>;
};

export default ProgressIndicator;
