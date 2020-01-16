import React, { useEffect } from "react";
import { initGA, logPageView } from "../pages/api/analytics";

const Inquisitor = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, [children]);

  return <div>{children}</div>;
};

export default Inquisitor;
