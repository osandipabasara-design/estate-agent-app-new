function filterProperties(properties, criteria) {
    return properties.filter((property) => {
  
      // Property Type
      if (criteria.type && property.type !== criteria.type) {
        return false;
      }
  
      // Price Range
      if (
        property.price < criteria.price[0] ||
        property.price > criteria.price[1]
      ) {
        return false;
      }
  
      // Bedrooms
      if (
        property.bedrooms < criteria.bedrooms[0] ||
        property.bedrooms > criteria.bedrooms[1]
      ) {
        return false;
      }
  
      // Date Added
      if (criteria.date) {
        const propertyDate = new Date(property.dateAdded);
        if (propertyDate < criteria.date) {
          return false;
        }
      }
  
      // Postcode
      if (
        criteria.postcode &&
        !property.postcode.toLowerCase().startsWith(
          criteria.postcode.toLowerCase()
        )
      ) {
        return false;
      }
  
      return true;
    });
  }
  
  export default filterProperties;
  