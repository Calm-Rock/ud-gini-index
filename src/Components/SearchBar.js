import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [tokenInfo, setTokenInfo] = useState("");

  const getToken = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://flask-gini-index.herokuapp.com/?id=${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    await setTokenInfo(data.gini_index);
    // console.log(res);
    console.log(`This is Data`, data.gini_index);
    console.log(await res.status);
    // console.log(`This is res : ${res}`);
    if (res.status !== 200) {
      window.alert("Invalid Credentials or Something went wrong!!");
    }
  };

  const searchAgain = () => {
    setTokenInfo("");
    setToken("");
  };
  if (tokenInfo == "") {
    return (
      <>
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div className="container m-auto h-screen w-screen flex justify-start items-center flex-col">
            <div className="text-white p-4 text-lg tracking-wide text-center md:text-xl md:w-6/12 md:p-8">
              Gini Index shows the inequality in the distribution of Power in a
              DAO or any community/social group. A value of 0 indicates perfect
              equality and a value of 1 indicates maximal inequality
            </div>
            <form
              method="POST"
              className="relative block mx-auto rounded-full py-8 flex flex-row items-center w-auto justify-center md:flex-row md:w-2/3"
            >
              <input
                type="text"
                className="h-14 w-2/3 px-6 rounded-full z-0 focus:shadow focus:outline-none"
                placeholder="Search for Token..."
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <button
                type="submit"
                className="h-14 w-auto bg-white px-8 rounded-full z-0 relative right-12 hover:bg-orange-300 transition focus:shadow focus:outline-none sm:w-fill"
                onClick={getToken}
              >
                <FaSearch color="#9778F5" fontSize="1.5em" />
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } else if (tokenInfo !== "") {
    return (
      <>
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 overflow-hidden">
          <div className="container m-auto h-screen w-screen flex justify-around items-center justify center flex-col md:h-screen">
            <div className="text-white px-4 text-lg tracking-wide text-center md:text-xl md:w-6/12 md:px-8">
              Gini Index shows the inequality in the distribution of Power in a
              DAO or any community/social group. A value of 0 indicates perfect
              equality and a value of 1 indicates maximal inequality
            </div>
            <div className="relative block rounded-full py-8 flex items-center w-auto justify-center">
              <div className="overflow-hidden h-auto w-5/6 px-8 text-xl rounded-full z-0 tracking-wide text-center text-white focus:shadow focus:outline-none md:text-3xl md:w-8/12 md:p-8 md:overflow-visible">
                Gini Index of the Token {token} is <br/><i>{tokenInfo}</i>
              </div>
            </div>
            <button
              onClick={searchAgain}
              className="h-auto w-auto bg-[#7878FD] text-white rounded-full text-lg px-8 py-5 z-0 hover:drop-shadow-xl focus:drop-shadow-2xl focus:outline-none sm:w-fill"
            >
              Search Again...
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default SearchBar;


