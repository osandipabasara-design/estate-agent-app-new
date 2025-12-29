import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/property/:id" elemet={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
