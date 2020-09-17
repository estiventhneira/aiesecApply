import React, { useState, useEffect } from "react";

function Opportunities({ count }) {
  const [Oportunidades, setOportunidades] = useState({
    data: 0,
  });

  useEffect(() => {
    fetch(
      `https://api-staging.aiesec.org/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&only=data&page=${count}&per_page=10&api_key=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c`
    )
      .then((data) => data.json())
      .then((json) => setOportunidades(json));
    console.log(Oportunidades);
  }, [count]);

  return (
    <div>
      {Oportunidades.data <= 1 ? (
        <h1>Loading...</h1>
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
