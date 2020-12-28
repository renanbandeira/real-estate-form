import React from "react";
import "./Page.css";

const Page: React.FC = (props) => {
  return (
    <div className="page-with-form">
      <fieldset>{props.children}</fieldset>
    </div>
  );
};

export default Page;
