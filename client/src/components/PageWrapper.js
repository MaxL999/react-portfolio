import React from "react";

const PageWrapper = ({ children }) => {
  return <div className="position-absolute w-100">{children}</div>;
};

export default PageWrapper;
