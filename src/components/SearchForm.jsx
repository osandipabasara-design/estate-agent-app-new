import { TextField, MenuItem, Button, Slider } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchForm.css";

function SearchForm({ criteria, setCriteria }) {

  const handleChange = (field, value) => {
    setCriteria({
      ...criteria,
      [field]: value
    });
  };

  return (
    <div  classname="search-form" style={{ marginBottom: "20px" }}>
      <h3>Search Properties</h3>

      {/* Property Type */}
      <TextField
        select
        label="Property Type"
        value={criteria.type}
        onChange={(e) => handleChange("type", e.target.value)}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="House">House</MenuItem>
        <MenuItem value="Flat">Flat</MenuItem>
        <MenuItem value="Bungalow">Bungalow</MenuItem>
        <MenuItem value="Apartment">Apartment</MenuItem>
      </TextField>

      {/* Price Range */}
      <label>Price (£)</label> 
      <TextField
        label="Enter price range"
        value={criteria.price}
        onChange={(e) => handleChange("price", e.target.value)}
        fullWidth
        margin="normal"
      />

      {/* Bedrooms */}
      <label>Bedrooms</label>
      <TextField
        value={criteria.bedrooms}
        onChange={(e) => handleChange("bedrooms", e.target.value)}
        fullWidth
        margin="normal"
      />

      {/* Date Added */}
      <label>Date Added After</label>
      <DatePicker
        selected={criteria.date}
        onChange={(date) => handleChange("date", date)}
        className="datepicker"
      />

      {/* Postcode */}
      <TextField
        label="Postcode Area"
        value={criteria.postcode}
        onChange={(e) => handleChange("postcode", e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchForm;
