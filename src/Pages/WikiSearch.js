import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const WikiSearch = () => {
  // const [search, setSearch] = useState("sadfsdfsd");
  // const search = "sadfsdfsd";
  const name = "shiva";
  const persn3 = "keethi";
  // resData = [
  //   {
  //     data: "sdfsdfsd",
  //     name: "shiva",
  //     persn3: "keethi",
  //   },
  // ];
  // const [data, name, persn3] = resData; //array destruing
  // {}   object
  // console.log(data);
  // console.log(name);
  // console.log(persn3);
  // const [count, setCount] = useState(0);
  // search  only one varibale
  // let search = ' ';
  // function setSearch(){
  //     return prevValue + currentValue
  // }
  const searchWiki = (e) => {
    const value = e.target.value;
    // console.log(e.target.value);
    // setSearch(value);
    // console.log(search)
  };

  async function doPostRequest() {
    // search = 'bali'
    // let payload = search;
    // get one arguments  url it should be only string format
    // post two arguments   url, payload
    let res = await axios.get(
      "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=bali",
      "bali"
    );

    let data = res.data;
    console.log(data);
  }

  return (
    <>
      <div>
        Wikipidia Application
        <div className="row">
          <div className="col-md-6">
            <input type="search" class="form-control" onChange={searchWiki} />
          </div>
          <div className="col-md-2">
            <button onClick={doPostRequest()}>Search</button>
          </div>
          <div
            className="col-md-1"
            style={{
              position: "relative",
              right: "9rem",

              top: "3px",
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WikiSearch;

// todo list

// search Icon
// search input
// we have to search something
// cross symbol

// search input we need to handle change for capture text input
//onChange

// api call for getting wikipedia response
