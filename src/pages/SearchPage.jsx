import { Link } from "react-router-dom";
import properties from "../data/properties.json";
import { useState } from "react";
import SearchForm from "../components/SearchForm";

function SearchPage() {

    const [criteria, setCriteria] = useState({
        type:"",
        price: [0, 1000000],
        bedrooms: [0, 6],
        date: null,
        postcode:""
    });

    return (
      <div>
        <h2>Property Search</h2>
        
        <SearchForm criteria={criteria} setCriteria={setCriteria} />

        <p>Properties loaded: {properties.length}</p>
        <pre>{JSON.stringify(criteria, null, 2)}</pre>
        
      </div>
    );
  }
  
  export default SearchPage;
  