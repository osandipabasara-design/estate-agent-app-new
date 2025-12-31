import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        src={property.images[0]}
        alt={property.shortDescription}
        className="property-image"
      />

      <div className="property-info">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>
          {property.type} • {property.bedrooms} bedrooms
        </p>
        <p>{property.shortDescription}</p>

        <Link to={`/property/${property.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
