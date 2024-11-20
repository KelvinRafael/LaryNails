import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./CarrosselModels.module.css";

function CarrosselModels() {
  const configCarrossel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autplaySpeed: 4000,
  };

  return (
    // Os três pontos antes de configCarrossel servem para espalhar as props dentro do componente Slider, desta forma não preciso chamar cada atributo (dots, infinite...) de forma individual.
    // O nome desta técnica é: spread operator
    <div className={style.d_container}>
      <h2>Diversos modelos de decoração</h2>
      <Slider {...configCarrossel}>
        <div>
          <img
            src="../images/AnimalPrint.png"
            className={style.img_Carroussel}
            alt="AnimalPrint"
          ></img>
          <p>Animal Print</p>
        </div>

        <div>
          <img
            src="../images/Aquarela.png"
            className={style.img_Carroussel}
            alt="Aquarela"
          ></img>
          <p>Aquarela</p>
        </div>

        <div>
          <img
            src="../images/BabyBoomer.png"
            className={style.img_Carroussel}
            alt="BabyBoomer"
          ></img>
          <p>BabyBoomer</p>
        </div>

        <div>
          <img
            src="../images/EfeitoJoia.png"
            className={style.img_Carroussel}
            alt="EfeitoJoia"
          ></img>
          <p>Efeito Joia</p>
        </div>

        <div>
          <img
            src="../images/EncapsuladaComMadrePerola.png"
            className={style.img_Carroussel}
            alt="EncapsuladaComMadrePerola"
          ></img>
          <p>Encapsulada com Madre Pérola</p>
        </div>

        <div>
          <img
            src="../images/ReversaTradicional.png"
            className={style.img_Carroussel}
            alt="ReversaTradicional"
          ></img>
          <p>Reversa Tradicional</p>
        </div>
      </Slider>
    </div>
  );
}

export default CarrosselModels;
