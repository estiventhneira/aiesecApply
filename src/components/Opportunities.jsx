import React from "react";
import Loader from "../static/tenor.gif";

function Opportunities({ Oportunidades }) {
  return (
    <div>
      {Oportunidades.data.length <= 1 ? (
        <img src={Loader} alt="loading app" className="loader-gif" />
      ) : (
        <div>
          <h1 className="text-lg font-bold">Oportunidades:</h1>
          <ul>
            {Oportunidades.data.map((opp) => {
              return (
                <li className="list-none cursor-pointer p-4" key={opp.id}>
                  <h2 className="text-lg">{opp.title}</h2>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Opportunities;
