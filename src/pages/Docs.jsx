/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Nav from "../components/Nav";

function Docs() {
  return (
    <>
      <Nav />
      <section className="p-10 md:p-24 ">
        <h1 className="text-2xl font-bold">Documentation:</h1>
        <div className="p-4">
          <p className="text-lg">
            This Application was made with Reacts JS <span role="img">⚛</span>,
            Tailwind
            <span role="img">🍃</span>, Hooks <span role="img">🧙‍♂️, </span>
            ReactRouter <span role="img">☎</span>, and Love{" "}
            <span role="img">💘</span> by{" "}
            <a
              className="text-blue-600 font-bold"
              href="https://github.com/estiventhneira"
            >
              @estiventhneira
            </a>
            <br />
            <a
              className="text-blue-600 font-bold"
              href="https://github.com/estiventhneira/aiesecApply"
            >
              Code here
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Docs;
