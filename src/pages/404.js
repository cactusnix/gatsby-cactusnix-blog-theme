import { Link } from "gatsby";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <div className="text-4xl font-medium text-black">Page not found.</div>
      <div className="text-gray-400 p-1.5">
        Sorry, we couldn't find the page you're looking for.
      </div>
      <Link className="text-blue-500" to="/">
        Go back home &rarr;
      </Link>
    </div>
  );
}
