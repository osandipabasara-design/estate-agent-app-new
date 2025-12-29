import { Link } from "react-router-dom";

function SearchPage() {
    return (
      <div>
        <h2>Property Search</h2>

        <Link to="/property/prop1">
            Go to sample property
        </Link>
        <p>Search form will go here</p>
      </div>
    );
  }
  
  export default SearchPage;
  