import React, { useEffect } from "react";
import * as eva from "eva-icons";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
deckDeckGoHighlightElement();

export default function Layout(props) {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <div className="tracking-wide">
      <Navigation supportScrolled={props.supportScrolled} />
      <div className="flex flex-col items-center bg-block-300 dark:bg-block-300-dark">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
