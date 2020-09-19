import React from "react";

function Search() {
  return (
    <>
      <h1 className="text-4xl text-center text-accent-1 mb-4">Search Opp</h1>
      <input
        type="text"
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        placeholder="Where do you wanna travel?"
      />
    </>
  );
}

export default Search;
