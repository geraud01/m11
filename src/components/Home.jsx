import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div className="slider-container">
      <p>Total updates: {updateCount} </p>
      <input
        onChange={(e) => sliderRef.slickGoTo(e.target.value)}
        value={slideIndex}
        type="range"
      />
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        >
        <div>
          <img src={process.env.PUBLIC_URL + "imagens/pexels-aleksandar-pasaric-618079.jpg"} alt="Imagem 1" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/pexels-chris-schippers-421927.jpg"} alt="Imagem 2" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/pexels-francesco-ungaro-409127.jpg"} alt="Imagem 3" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/pexels-lukas-kloeppel-466685.jpg"} alt="Imagem 4" />
        </div>
      </Slider>
    </div>
  );
}

export default Home;
