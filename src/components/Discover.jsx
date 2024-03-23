import { useState } from "react";
import React from "react";
import Banlist from "./Banlist";

function Discover(props) {
  const URL =
    "https://api.thedogapi.com/v1/images/search?limit=1&api_key=" +
    props.accessKey;

  const [currentDog, setCurrentDog] = useState(null);
  const [blacklist, setBlacklist] = useState([]);

  const callAPI = async () => {
    try {
      let response = null;
      let data = null;
      do {
        response = await fetch(URL);
        data = await response.json();
      } while (!data.length || !data[0].breeds || !data[0].breeds.length || blacklist.some(attr => data[0].breeds[0].name.includes(attr) || data[0].breeds[0].bred_for.includes(attr) || data[0].breeds[0].breed_group.includes(attr) || data[0].breeds[0].life_span.includes(attr) ));
  
      setCurrentDog(data[0]);
    } catch (error) {
      console.error("Error fetching dog", error);
    }
  };

  const handleBlacklist = (attribute) => {
    if (blacklist.includes(attribute)) {
      setBlacklist(blacklist.filter((item) => item !== attribute));
    } else {
      setBlacklist([...blacklist, attribute]);
    }
  };

  let attributeStyling = "bg-pink-500 shadow-lg hover:bg-pink-700 text-white font-bold py-2 mx-2 px-4 rounded-full"


  return (
    <div className="flex place-content-center w-full">
      <div>
        {currentDog ? (
          <>
            <img className="py-5" src={currentDog.url} alt="dog" width="500px" />
            {currentDog.breeds && currentDog.breeds.length > 0 && (
              <>
                <div>
                <button className={attributeStyling} onClick={() => handleBlacklist(currentDog.breeds[0].name)}>
                  {currentDog.breeds[0].name}
                </button>
                <button className={attributeStyling}  onClick={() => handleBlacklist(currentDog.breeds[0].bred_for)}>
                  {currentDog.breeds[0].bred_for}
                </button>
                <button className={attributeStyling}  onClick={() => handleBlacklist(currentDog.breeds[0].breed_group)}>
                  {currentDog.breeds[0].breed_group}
                </button>
                <button className={attributeStyling}  onClick={() => handleBlacklist(currentDog.breeds[0].life_span)}>
                  {currentDog.breeds[0].life_span}
                </button>
                </div>
              </>
            )}
          </>
        ) : (
          ""
        )}

        <button
          onClick={callAPI}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-lg font-bold px-5 py-2.5 text-center me-2 mb-2 mt-5"
        >
          Generate New Dog
        </button>
      </div>

      {currentDog ? <>
        <div className="banlist">
        <Banlist blacklist={blacklist} setBlacklist={setBlacklist} />
      </div>
      </> : ""}
    </div>
  );
}

export default Discover;
