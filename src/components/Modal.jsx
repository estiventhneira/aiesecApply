import React, { useState } from "react";
import ReactDOM from "react-dom";
import Loader from "../static/tenor.gif";

function Modal({ isOpen, onClose, idOpp = "" }) {
  const [state, setstate] = useState({
    inputValue: idOpp,
  });

  function changeInputValue(e) {
    setstate({
      ...state,
      inputValue: e.target.value,
    });
  }
  //present
  if (!isOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="modal-container">
        <div className="bg-white text-black text-lg top-0 p-10 md:p-16 modal__opp flex justify-center flex-col">
          <h3 className="text-2xl">New name of the Opp: {idOpp.id}</h3>
          <input
            className="border-solid border-2 border-gray-600 mt-4"
            onChange={(e) => {
              changeInputValue(e);
            }}
            placeholder={idOpp.title}
            type="text"
          />
          <div className="btn-container flex justify-around font-bold mt-8">
            <button
              onClick={onClose}
              className="Modal__close-button text-white font-bold bg-red-600 p-2 px-4 rounded-md "
            >
              Close
            </button>
            <button
              onClick={() => editTitle(state.inputValue, idOpp.id)}
              className="Modal__close-button font-bold text-white bg-teal-400 p-2 px-4 rounded-md "
            >
              Change title
            </button>
          </div>
          {state.loading ? (
            <img src={Loader} className="max-h-12" alt="loading" />
          ) : null}
        </div>
      </div>,
      document.getElementById("modal")
    );
  }

  //logic edit title
  function editTitle(newName, id_opp) {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "_mkra_stck=postgres%3A1600543666.5736778");

    var formdata = new FormData();
    formdata.append("opportunity[title]", newName);

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      setstate({
        ...state,
        loading: true,
      });
      fetch(
        `https://api-staging.aiesec.org/v2/opportunities/${id_opp}?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c`,
        requestOptions
      ).then(() => {
        setstate({
          ...state,
          loading: false,
          onClose,
        });
        onClose();
        document.location.reload();
      });
    } catch (error) {
      console.log("error", error);
    }
  }
}

export default Modal;
