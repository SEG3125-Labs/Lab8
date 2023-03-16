import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'

import Listings from './data/listings.json';

function Home() {
  return (
    <div>
      <div>
        <h1>Student Housing Finder</h1>
      </div>
      <div>
        <input type="text" placeholder='Search'></input>
        <h3>Listings</h3>
        <label for="location">Select a location:</label>

        <select name="location" id="location">
          <option value="ottawa">Ottawa</option>
          <option value="toronto">Toronto</option>
          <option value="calgary">Calgary</option>
          <option value="montreal">Montreal</option>
        </select>
        {Listings.map((listing, key) => <ListItem key={key} title={listing.title} description={listing.description} photoUrl={listing.photoUrl} location={listing.location}></ListItem>)}
      </div>
    </div>
  );
}

export default Home;
