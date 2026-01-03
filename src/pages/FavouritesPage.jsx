import Favourites from "../components/Favourites";

const FavouritesPage = ({favourites, addToFavourites, removeFromFavourites, clearFavourites}) => {
    return (
        <div className="page">
            <h1>Favourites</h1>
            <Favourites  favourites={favourites} removeFromFavourites={removeFromFavourites} clearFavourites={clearFavourites} />
        </div>
    );
};

export default FavouritesPage;