import data from "../data/properties.json"; 
import { useState } from "react"; 
import SearchForm from "../components/SearchForm";
import filterProperties from "../utils/filterProperties";
import PropertyCard from "../components/PropertyCard";
import "./SearchPage.css";
import Favourites from "../components/Favourites";


function SearchPage({ favourites, addToFavourites, removeFromFavourites, clearFavourites}) {

    const [criteria, setCriteria] = useState(
        {
            type:"",
            price: "",
            bedrooms: "",
            date: null,
            postcode:""
        }
    );

    const filteredProperties = filterProperties(data.properties, criteria);
 

    return (
      <div className="search-layout">
        <div className="main-content">
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
  