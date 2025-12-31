import filterProperties from "../utils/filterProperties";
import properties from "../data/properties.json";

test("filters properties by type", () => {
    const criteria = {
      type: "House",
      price: [0, 1000000],
      bedrooms: [0, 6],
      date: null,
      postcode: ""
    };
  
    const result = filterProperties(properties, criteria);
  
    expect(result.every(p => p.type === "House")).toBe(true);
});

test("filters properties by price range", () => {
    const criteria = {
      type: "",
      price: [300000, 500000],
      bedrooms: [0, 6],
      date: null,
      postcode: ""
    };
  
    const result = filterProperties(properties, criteria);
  
    expect(
      result.every(p => p.price >= 300000 && p.price <= 500000)
    ).toBe(true);
});

test("filters properties by bedroom count", () => {
    const criteria = {
      type: "",
      price: [0, 1000000],
      bedrooms: [3, 5],
      date: null,
      postcode: ""
    };
  
    const result = filterProperties(properties, criteria);
  
    expect(
      result.every(p => p.bedrooms >= 3 && p.bedrooms <= 5)
    ).toBe(true);
});

test("filters properties using multiple criteria", () => {
    const criteria = {
      type: "Flat",
      price: [200000, 450000],
      bedrooms: [1, 3],
      date: null,
      postcode: "E"
    };
  
    const result = filterProperties(properties, criteria);
  
    expect(
      result.every(
        p =>
          p.type === "Flat" &&
          p.price >= 200000 &&
          p.price <= 450000 &&
          p.bedrooms >= 1 &&
          p.bedrooms <= 3 &&
          p.postcode.startsWith("E")
      )
    ).toBe(true);
});

test("returns all properties when no criteria applied", () => {
    const criteria = {
      type: "",
      price: [0, 1000000],
      bedrooms: [0, 6],
      date: null,
      postcode: ""
    };
  
    const result = filterProperties(properties, criteria);
  
    expect(result.length).toBe(properties.length);
});

test("filters properties added after a given date", () => {
    const criteria = {
      type: "",
      price: [0, 1000000],
      bedrooms: [0, 6],
      date: new Date("2024-10-01"),
      postcode: ""
    };
  
    const result = filterProperties(properties, criteria);
  
    expect(
      result.every(
        p => new Date(p.dateAdded) >= new Date("2024-10-01")
      )
    ).toBe(true);
});
  
  
  
  

  

  
  
