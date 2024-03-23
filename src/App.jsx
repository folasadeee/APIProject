const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import { useState } from "react";
import "./App.css";
import Discover from "./components/Discover";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       
        <main className="bg-white text-center shadow-lg w-5/6 p-5 mx-auto mt-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Welcome to <span className="underline underline-offset-3 decoration-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">PupFinder</span></h1>

          <p className="text-xl">PupFinder is your guide to discovering the perfect pup! Explore a wide variety of dog breeds and easily blacklist specific attributes to find your ideal furry companion.</p>

          <hr className="my-6"/>

         <Discover accessKey={ACCESS_KEY} />     </main>

      
    </>
  );
}

export default App;
