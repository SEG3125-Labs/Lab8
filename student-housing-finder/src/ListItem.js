import logo from './logo.svg';
import './App.css';

function ListItem() {
  return (
    <div style={{display: "flex", flexDirection: "row", padding: "25px 50px"}}>
      <div style={{height: "200px", width: "500px", backgroundColor: 'DarkGray'}}>
        LISTING PHOTO HERE
      </div>
      <div style={{width: "100%", backgroundColor: 'LightGray'}}>
        <h3>Listing Title</h3>
        <h5>Listing Description</h5>
        <p>Notes</p>
      </div>
    </div>
  );
}

export default ListItem;
