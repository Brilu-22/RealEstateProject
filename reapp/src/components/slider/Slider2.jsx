import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(1);

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullslider">
          <div
            className="arrow"
            onClick={() =>
              setImageIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : images.length - 1
              )
            }
          >
            <img src="/arrow.png" alt="Previous" />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="Displayed" />
          </div>
          <div
            className="arrow"
            onClick={() =>
              setImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
              )
            }
          >
            <img src="/arrow.png" alt="Next" className="right" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            x
          </div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} alt="Main" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt={`Thumbnail ${index}`}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
