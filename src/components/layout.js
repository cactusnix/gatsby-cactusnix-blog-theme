import Navigation from "../components/navigation";
import Footer from "../components/footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
