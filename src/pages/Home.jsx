import React from "react";

import Nav from "../components/Nav";
import Search from "../components/Search";
import Opportunities from "../components/Opportunities";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="py-8 px-20">
        <Search />
        <div className="list-opp p-4 bg-gray-300 mt-4">
          <Opportunities count={600}></Opportunities>
        </div>
      </div>
    </div>
  );
}
