import Gallery from "../components/Gallery";
import { useParams } from "react-router-dom";
import data from "../data/properties.json";
import PropertyTabs from "../components/PropertyTabs";

function PropertyPage() {
    const { id } = useParams();
    const property = data.properties.find((p) => p.id === id);

    if (!property) {
        return <p>Property not found</p>
    }

    return (
      <div style={{maxWidth: "1200px", margin: "auto", padding: "40px" }}>
        <h2>Property Details</h2>

        <p>
        {property.type} • {property.bedrooms} bedrooms • {property.location}
        </p>

        <Gallery images={property.images} />
        <PropertyTabs property={property} />
      </div>
    );
  }
  
  export default PropertyPage;
  