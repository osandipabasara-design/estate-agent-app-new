import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import './App.css';

function App() {

  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (property) => {
    if (!favourites.some((p) => p.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((p) => p.id !== id));
  };

  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage favourites={favourites} addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites} clearFavourites={clearFavourites} /> } />
        <Route path="/property/:id" element={<PropertyPage favourites={favourites} addToFavourites={addToFavourites} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
