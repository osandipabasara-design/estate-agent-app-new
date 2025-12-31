import { useState } from "react";
import "./Gallery.css";

function Gallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="gallery">
      <img src={mainImage} alt="Property" className="main-image" />

      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className={`thumbnail ${img === mainImage ? "active" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
