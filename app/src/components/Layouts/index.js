import React from "react";
import Header from "../header";

const MainInLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainInLayout;
