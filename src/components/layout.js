import React, { useEffect } from "react";
import * as eva from "eva-icons";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Layout({ children }) {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center text-content-200 dark:text-content-200-dark">
        {children}
      </div>
      <Footer />
    </div>
  );
}
