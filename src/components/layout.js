import React, { useEffect } from "react";
import * as eva from "eva-icons";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
deckDeckGoHighlightElement();

export default function Layout(props) {
  const { supportScrolled = false, children } = props;
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <div className="tracking-wide">
      <Navigation supportScrolled={supportScrolled} />
      <div className="flex flex-col items-center bg-block-300 dark:bg-block-300-dark">
        {children}
      </div>
      <Footer />
    </div>
  );
}
