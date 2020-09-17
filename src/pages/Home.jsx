import React, { useState } from "react";
import ReactDOM from "react-dom";

import Nav from "../components/Nav";
import Search from "../components/Search";
import Opportunities from "../components/Opportunities";

export default function Home() {
  let [count] = useState(610);

  const masOportunidades = () => {
    insertarOpp();
    const lista = document.getElementById("lista");
    ReactDOM.createPortal(<Opportunities count={count} />, lista);
    //console.log(lista);
    //lista.appendChild(<Opportunities count={count}></Opportunities>);
  };
  function insertarOpp() {
    return <h1>hola</h1>;
  }

  return (
    <div>
      <Nav />
      <div className="py-8 px-20">
        <Search />
        <div id="lista" className="list-opp p-4 bg-gray-300 mt-4">
          <Opportunities count={count}></Opportunities>
          {insertarOpp()}
        </div>
        <div className="justify-center items-center flex">
          <button
            className="my-4 bg-blue-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={masOportunidades}
          >
            ¡Más Oportunidades!
          </button>
        </div>
      </div>
    </div>
  );
}
