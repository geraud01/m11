import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [updateCount, setUpdateCount] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
  };

  const imageStyle = {
    width: "90%",
    height: "50%",
    borderRadius: "8px",
  };

  const containerStyle = {
    display: "block",
  };

  return (
    <div className="slider-container" style={containerStyle}>
      <p>Total updates: {updateCount} </p>
      <Slider {...settings}>
        <div>
          <img
            src="/imagens/pexels-aleksandar-pasaric-618079.jpg"
            alt="Imagem 1"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="/imagens/pexels-chris-schippers-421927.jpg"
            alt="Imagem 2"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="/imagens/pexels-francesco-ungaro-409127.jpg"
            alt="Imagem 3"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="/imagens/pexels-lukas-kloeppel-466685.jpg"
            alt="Imagem 4"
            style={imageStyle}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Home;
