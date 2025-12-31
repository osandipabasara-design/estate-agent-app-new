import { Link } from "react-router-dom";
import properties from "../data/properties.json";
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import filterProperties from "../utils/filterProperties";
import PropertyCard from "../components/PropertyCard";
import "./SearchPage.css";
import Favourites from "../components/Favourites";


function SearchPage({ favourites, addToFavourites }) {

    const [criteria, setCriteria] = useState(
        {
            type:"",
            price: [0, 1000000],
            bedrooms: [0, 6],
            date: null,
            postcode:""
        }
    );

    const filteredProperties = filterProperties(properties, criteria);

    <PropertyCard key={property.id} property={property} addToFavourites={addToFavourites} />

    return (
      <div className="search-layout">
        <div>
        
            <SearchForm criteria={criteria} setCriteria={setCriteria} />

            <div className="results-grid">
                {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} addToFavourites={addToFavourites} />
                ))}
            </div>
        </div>

        <Favourites
            favourites={favourites}
            removeFromFavourites={removeFromFavourites}
            clearFavourites={clearFavourites}
        />

      </div>

    );
  }
  
  export default SearchPage;
  