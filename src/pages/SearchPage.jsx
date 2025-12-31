import { Link } from "react-router-dom";
import properties from "../data/properties.json";
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import filterProperties from "../utils/filterProperties";

function SearchPage() {

    const [criteria, setCriteria] = useState({
        type:"",
        price: [0, 1000000],
        bedrooms: [0, 6],
        date: null,
        postcode:""
    });

    const filterProperties = filterProperties(properties, criteria);

    return (
      <div>
        <h2>Property Search</h2>
        
        <SearchForm criteria={criteria} setCriteria={setCriteria} />

        <h3>Results: {filterProperties.length}</h3>

        <ul>
            {filterProperties.map((property) => (
                <li key={property.id}>
                    {property.type} - £{property.price} - {property.bedrooms} beds
                </li>
            ))}
        </ul>

      </div>
    );
  }
  
  export default SearchPage;
  