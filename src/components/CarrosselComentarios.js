import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./CarrosselComentarios.module.css";

function CarrosselComentarios() {
  const configCarrossel = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autplaySpeed: 3000,
  };

  return (
    // Os três pontos antes de configCarrossel servem para espalhar as props dentro do componente Slider, desta forma não preciso chamar cada atributo (dots, infinite...) de forma individual.
    // O nome desta técnica é: spread operator
    <div className={style.d_containerSlide}>
      <h2>O que estão dizendo sobre o curso?</h2>
      <Slider {...configCarrossel}>
        <div className={style.d_cardComent}>
          <img
            src="../images/conversa1.png"
            className={style.img_Carroussel}
            alt="slide 1"
          ></img>
        </div>

        <div>
          <img
            src="../images/conversa2.png"
            className={style.img_Carroussel}
            alt="slide 2"
          ></img>
        </div>

        <div>
          <img
            src="../images/conversa3.png"
            className={style.img_Carroussel}
            alt="slide 3"
          ></img>
        </div>

        <div>
          <img
            src="../images/conversa4.png"
            className={style.img_Carroussel}
            alt="slide 4"
          ></img>
        </div>

        <div>
          <img
            src="../images/conversa5.png"
            className={style.img_Carroussel}
            alt="slide 5"
          ></img>
        </div>
        <div>
          <img
            src="../images/conversa6.png"
            className={style.img_Carroussel}
            alt="slide 6"
          ></img>
        </div>
        <div>
          <img
            src="../images/conversa7.png"
            className={style.img_Carroussel}
            alt="slide 7"
          ></img>
        </div>
        <div>
          <img
            src="../images/conversa8.png"
            className={style.img_Carroussel}
            alt="slide 8"
          ></img>
        </div>
        <div>
          <img
            src="../images/conversa9.png"
            className={style.img_Carroussel}
            alt="slide 9"
          ></img>
        </div>
        <div>
          <img
            src="../images/conversa10.png"
            className={style.img_Carroussel}
            alt="slide 10"
          ></img>
        </div>
        <div>
          <img
            src="../images/conversa11.png"
            className={style.img_Carroussel}
            alt="slide 11"
          ></img>
        </div>
        <div>
          <img
            src="../images/conversa12.png"
            className={style.img_Carroussel}
            alt="slide 12"
          ></img>
        </div>
        <div>
          <img
            src="../images/conversa13.png"
            className={style.img_Carroussel}
            alt="slide 13"
          ></img>
        </div>
      </Slider>
    </div>
  );
}

export default CarrosselComentarios;
