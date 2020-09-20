import React from "react";
import ReactDOM from "react-dom";
import Loader from "../static/tenor.gif";

function Opportunities({ Oportunidades }) {
  function handleTitleChange(params) {
    console.log(params);
  }
  return (
    <>
      {Oportunidades.data.length <= 1 ? (
        <img src={Loader} alt="loading app" className="loader-gif" />
      ) : (
        <ul>
          {Oportunidades.data.map((opp) => {
            return (
              <li
                onClick={handleTitleChange(opp)}
                className="cursor-pointer p-4 flex"
                key={opp.id}
              >
                <img src={opp.profile_photo_urls.thumb} alt={opp.title} />
                <h2 className="text-2xl px-3 text-blue-600 hover:text-blue-800 text-underline">
                  {opp.title}
                </h2>
                <span></span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Opportunities;
