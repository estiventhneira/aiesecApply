import React, { useState, useEffect } from "react";

import Nav from "../components/Nav";
import Search from "../components/Search";
import Opportunities from "../components/Opportunities";

import Loader from "../static/tenor.gif";

export default function Home() {
  let [count, setCount] = useState(610);

  const [Oportunidades, setOportunidades] = useState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    try {
      setOportunidades({
        ...Oportunidades,
        loading: true,
      });

      async function fetchData() {
        const request = await fetch(
          `https://api-staging.aiesec.org/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&only=data&page=${count}&per_page=10&api_key=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c`
        );

        const response = await request.json();
        let newOpps = Oportunidades.data.concat(response.data);
        setOportunidades({
          loading: false,
          data: newOpps,
        });
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Nav />
      <div className="py-8 px-20">
        <Search />
        <div id="lista" className="list-opp p-4 bg-gray-300 mt-4">
          <Opportunities
            loading={Oportunidades.loading}
            Oportunidades={Oportunidades}
          ></Opportunities>
        </div>
        <CargaSecundaria loading={Oportunidades.loading} />
        <div className="justify-center items-center flex">
          <button
            onClick={handleClick}
            className="my-4 bg-blue-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            ¡Next Page!
          </button>
        </div>
      </div>
    </div>
  );
}

const CargaSecundaria = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <img src={Loader} alt="loading app" className="loader-gif" />
      ) : (
        <span></span>
      )}
    </div>
  );
};
