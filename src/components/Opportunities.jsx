import React from "react";
import Loader from "../static/tenor.gif";

function Opportunities({ Oportunidades }) {
  return (
    <>
      {Oportunidades.data.length <= 1 ? (
        <img src={Loader} alt="loading app" className="loader-gif" />
      ) : (
        <>
          <ul>
            {Oportunidades.data.map((opp) => {
              return (
                <li className="cursor-pointer p-4 flex" key={opp.id}>
                  {console.log(opp)}
                  <img src={opp.profile_photo_urls.thumb} alt={opp.title} />
                  <h2 className="text-2xl px-3 text-blue-600 hover:text-blue-800 text-underline">
                    {opp.title}
                  </h2>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default Opportunities;
