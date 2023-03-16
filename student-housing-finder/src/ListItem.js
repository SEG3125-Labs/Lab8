import logo from './logo.svg';
import './App.css';

function ListItem(props) {
  return (
    <div style={{display: "flex", flexDirection: "row", padding: "25px 50px"}}>
      <div style={{height: "200px", width: "500px", backgroundColor: 'DarkGray'}}>
        LISTING PHOTO HERE
        {props.photoUrl}
      </div>
      <div style={{width: "100%", backgroundColor: 'LightGray'}}>
        <h3>{props.title}</h3>
        <h5>{props.description}</h5>
        <a>{props.location}</a>
      </div>
    </div>
  );
}

export default ListItem;
