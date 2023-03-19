// import logo from './logo.svg';
// import './App.css';

import Detail from './Detail';
import Apply from './Apply';
import ListItem from './ListItem'

import Listings from '../data/listings.json';
import React, { useState } from "react";
function Home() {

  const [message, setMessage] = useState("");

  const [page, setPage] = useState("");

  function showMessage(mykey) {
    setMessage(mykey);
  }
  function setP(p) {
    setPage(p);


  }

  function back() {
    setMessage("");
    setPage("home");
  }

  let mm;

  if (message === "") {
    mm =

      <>

        <input type="text" placeholder='Search'></input>
        <h3>Listings</h3>
        <label for="location">Select a location:</label>

        <select name="location" id="location">
          <option value="ottawa">Ottawa</option>
          <option value="toronto">Toronto</option>
          <option value="calgary">Calgary</option>
          <option value="montreal">Montreal</option>
        </select>
        <p>{message}</p>


        {Listings.map((listing, key) =>
          <ListItem showMessage={showMessage} key={key} mykey={listing.id} title={listing.title}
            description={listing.description} photoUrl={listing.photoUrl}
            location={listing.location}></ListItem>)
        }

      </>
  } else if (page === "apply") {
    mm = (<div><button onClick={back}> Go back</button> <Apply setP={setP} id={message}></Apply></div>)
  }
  else {

    mm = (<><button onClick={back}> Go back</button><Detail setP={setP} id={message}></Detail></>)
  }
  return (
    <div>
      <div>
        <h1>Student Housing Finder</h1>
      </div>
      <div>

        {mm}

      </div>
    </div>
  );
}

export default Home;
