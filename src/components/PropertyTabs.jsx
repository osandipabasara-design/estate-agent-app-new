import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

function PropertyTabs({ property }) {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "100%", marginTop: 3 }}>
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label="Description" />
        <Tab label="Floor Plan" />
        <Tab label="Map" />
      </Tabs>

      {value === 0 && (
        <Box sx={{ padding: 2 }}>
          <p>{property.longDescription}</p>
        </Box>
      )}

      {value === 1 && (
        <Box sx={{ padding: 2 }}>
          <img
            src={`${process.env.PUBLIC_URL}${property.floorPlan}`}
            alt="Floor Plan"
            style={{ width: "100%" }}
          />
        </Box>
      )}

      {value === 2 && (
        <Box sx={{ padding: 2 }}>
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            loading="lazy"
            src={`https://www.google.com/maps?q=${property.location}&output=embed`}
          ></iframe>
        </Box>
      )}
    </Box>
  );
}

export default PropertyTabs;
