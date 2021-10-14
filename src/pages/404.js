import React from "react";
import { Link } from "gatsby";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-block-300 dark:bg-block-300-dark">
      <div className="text-4xl text-content-200 dark:text-content-200-dark">
        Page not found.
      </div>
      <div className="text-content-100 dark:text-content-100-dark p-1.5">
        Sorry, we couldn't find the page you're looking for.
      </div>
      <Link className="text-link dark:text-link-dark" to="/">
        Go back home &rarr;
      </Link>
    </div>
  );
}
