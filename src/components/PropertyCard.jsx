import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property, addToFavourites }) {
  return (
    <div className="property-card" draggable onDragStart={(e) => e.dataTransfer.setData("property", JSON.stringify(property))}>
      <img
        src={property.images[1]}
        alt={property.shortDescription}
        className="property-image"
      />

      <div className="property-info">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>
          {property.type} • {property.bedrooms} bedrooms
        </p>
        <p>{property.shortDescription}</p>

        <button onClick={() => addToFavourites(property)}>
            Add to Favourites
        </button>

        <Link to={`/property/${property.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
