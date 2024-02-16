import React, { useRef } from "react";
import Slider from "react-slick";
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="slider-container">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div key={1}>
            <img
              src="../imagens/imagem1.png"
              alt="Descrição da imagem 1"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div key={2}>
            <img
              src="../imagens/imagem2.png"
              alt="Descrição da imagem 2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Slider>

        <div className="flex justify-center space-x-20 mt-5">
          <Button
            variant="contained"
            color="primary"
            onClick={previous}
          >
            Anterior
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={next}
          >
            Próximo
          </Button>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700">
            Explore a galeria de imagens com a funcionalidade de slider!<p />
            Utilizei React e React-Slick para criar uma experiência
            interativa. Deslize para ver mais imagens e aproveite a navegação
            fácil entre elas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
