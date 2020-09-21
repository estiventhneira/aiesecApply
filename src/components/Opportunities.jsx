import React, { useState } from "react";
import Loader from "../static/tenor.gif";
import Modal from "../components/Modal";

function Opportunities({ Oportunidades }) {
  //
  const [state, setstate] = useState({
    data: null,
    isModalOpen: false,
  });

  function onChangeModal(opp) {
    setstate({
      ...state,
      data: opp,
      isModalOpen: true,
    });
  }

  function onCloseModal(e) {
    setstate({
      ...state,
      isModalOpen: false,
    });
  }

  return (
    <>
      <Modal
        idOpp={state.data}
        onClose={onCloseModal}
        isOpen={state.isModalOpen}
      ></Modal>
      {Oportunidades.data.length <= 1 ? (
        <img src={Loader} alt="loading app" className="loader-gif" />
      ) : (
        <ul>
          {Oportunidades.data.map((opp) => {
            return (
              <li
                onClick={() => {
                  onChangeModal(opp);
                }}
                className="cursor-pointer p-4 flex"
                key={opp.id}
              >
                <img src={opp.profile_photo_urls.thumb} alt={opp.title} />
                <h2 className="text-2xl px-3 text-blue-600 hover:text-blue-800 text-underline">
                  {opp.title}
                  <br />

                  <span className="text-base text-gray-600 font-thin">
                    {opp.id}
                  </span>
                </h2>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Opportunities;
