function Favourites({ favourites, removeFromFavourites, clearFavourites }) {
    return (
      <div 
        className="favourites"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const property = JSON.parse(
            e.dataTransfer.getData("property")
          );
          removeFromFavourites(property.id);
        }} 
      >
        <h3>Favourites</h3>
  
        {favourites.length === 0 && (
            <p>No favourites yet</p>
        )}
  
        {favourites.map((property) => (
          <div key={property.id} className="favourite-item">
            <p>{property.shortDescription}</p>
            <button onClick={() => removeFromFavourites(property.id)}>
              Remove
            </button>
          </div>
        ))}
  
        {favourites.length > 0 && (
          <button onClick={clearFavourites}>
            Clear All
          </button>
        )}
      </div>
    );
  }
  
  export default Favourites;
  