import React from "react";


function Banlist({ blacklist, setBlacklist }) {
  return (
    <div className="bg-gray-200 p-2 mt-4 rounded-lg w-72 mx-3">
      <h2 className="text-xl font-bold py-4">Ban List</h2>
      {blacklist.map((item, index) => (
        <div className=" bg-white w-full" key={index} onClick={() => setBlacklist(blacklist.filter((_, i) => i !== index))}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Banlist;
