import Navigation from "../components/navigation";
import Footer from "../components/footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center">{children}</div>
      <Footer />
    </div>
  );
}
