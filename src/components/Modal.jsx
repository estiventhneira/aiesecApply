import React from "react";

function Modal() {
  function editTitle(params) {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "_mkra_stck=postgres%3A1600543666.5736778");

    var formdata = new FormData();
    formdata.append("opportunity[title]", params);

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://api-staging.aiesec.org/v2/opportunities/9493?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="p-6 w-full bg-gray-400">
      <h1>Hola</h1>
    </div>
  );
}

export default Modal;
