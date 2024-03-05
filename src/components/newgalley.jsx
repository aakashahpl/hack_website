import ImageSlider from "./imageslider";
const Newgallery = () => {
  const slides = [
    { url: "https://wrlandconservancy.org/wp-content/themes/western-reserve/img/placeholder.webp", title: "beach" },
    { url: "https://www.egretta.org/gallery/menu_photos/landscape.jpg", title: "boat" },
    { url: "https://beasleysjewelry.com/wp-content/uploads/2020/04/calm-1.jpg", title: "forest" },
  ];
  const containerStyles = {
    width: "800px",
    height: "500px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Gallery</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Newgallery;