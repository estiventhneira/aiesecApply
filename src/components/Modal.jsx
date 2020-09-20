import React from "react";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, idOpp }) {
  //present
  if (!isOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="modal-container">
        <div className="bg-white text-black text-lg top-0 p-10 md:p-20 modal__opp">
          <button onClick={onClose} className="Modal__close-button">
            X{idOpp.id} {idOpp.title}
          </button>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }

  //logic
  /*  function editTitle(newName, id_opp) {
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

    fetch(
      `https://api-staging.aiesec.org/v2/opportunities/${id_opp}?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } */
}

export default Modal;
