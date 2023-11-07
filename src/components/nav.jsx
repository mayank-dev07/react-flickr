import axios from "axios";
import Data from "./data";
import { useState, useEffect } from "react";

function nav() {
  const [user, setUser] = useState("");

  function search(user) {
    console.log(user);
    axios
      .get("https://www.flickr.com/services/rest/", {
        params: {
          method: "flickr.photos.search",
          api_key: "9c9d8692c55555f7cca24e8cb056cfcf",
          text: user,
          format: "json",
          nojsoncallback: "1",
        },
      })
      .then(function (response) {
        console.log(response);
        setUser(response.data.photos.photo);
      })
      .catch(function (error) {
        console.log(error);
      });
    //   }, []);
    return;
  }

  function submit(e) {
    e.preventDefault();
    console.log(e.currentTarget.search.value);
    // setUser(e.currentTarget.search.value);
    search(e.currentTarget.search.value);
    e.target.reset();
  }
  console.log();
  return (
    <>
      <nav className="bg-black sticky top-0">
        <div className="container mx-auto justify-center items-center flex h-20 ">
          <form action="" onSubmit={submit}>
            <input
              type="text"
              className="p-2 w-96 border border-slate-300 hover:border-slate-400 focus:outline-none  "
              placeholder="Search Image"
              name="search"
              id="search"
            />
            <button
              className="p-2 w-24 border border-gray-300 bg-gray-400 hover:border-slate-400 "
              type="submit"
              required>
              Search
            </button>
          </form>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default nav;
