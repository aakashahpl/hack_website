import  { useState } from "react";
import "./Gallery.css";
function Gallery() {
    const images = [
      "https://wrlandconservancy.org/wp-content/themes/western-reserve/img/placeholder.webp",
      "https://www.egretta.org/gallery/menu_photos/landscape.jpg",
      "https://beasleysjewelry.com/wp-content/uploads/2020/04/calm-1.jpg",
      "https://woodspringtrust.org/wp-content/uploads/2013/04/placeholder.jpg",
    ];
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="Gallery-container centered">
        <h1 className="Gallery-heading">Gallery</h1>
        <div className="Gallery-wrapper">
          <button className="Gallery-button round left" onClick={prevImage}>
            &#9664;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="Gallery-image"
          />
          <button className="Gallery-button round right" onClick={nextImage}>
            &#9654; {/* Right arrow */}
          </button>
        </div>
      </div>
    );
  }
  
  export default Gallery;
