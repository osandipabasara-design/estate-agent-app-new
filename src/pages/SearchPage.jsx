import { Link } from "react-router-dom";
import properties from "../data/properties.json";

function SearchPage() {
    return (
      <div>
        <h2>Property Search</h2>
        <p>Total Properties: {properties.length}</p>

        <Link to="/property/prop1">
            Go to sample property
        </Link>
        <p>Search form will go here</p>
      </div>
    );
  }
  
  export default SearchPage;
  