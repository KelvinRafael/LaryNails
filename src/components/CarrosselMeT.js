import { useLayoutEffect } from "react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./CarrosselMeT.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function CarrosselMeT() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".CarrosselMeT_img_Carroussel__CIo36", {
      translateY: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".CarrosselMeT_d_container__crZ9g",
        scrub: true,
        // markers: true,
        start: "top 200px",
        end: "bottom 600px",
      },
    });
    return () => {
      gsap.killTweensOf(".CarrosselMeT_img_Carroussel__CIo36");
    };
  }, []);
  return (
    <div className={style.d_container}>
      <h2>Dê o seu primeiro passo em direção ao sucesso!</h2>
      <div>
        <img
          src="./images/1.png"
          className={style.img_Carroussel}
          alt="Unhas decorativas"
        ></img>
        <img
          src="./images/2.png"
          className={style.img_Carroussel}
          alt="Deixe a insegurança para trás e ganhe confiança para criar unhas incríveis que encantem seus clientes"
        ></img>
      </div>
      <div>
        <img
          src="./images/4.png"
          className={style.img_Carroussel}
          alt="Aprenda as decorações que estão em alta e veja seu faturamento crescer! Aulas exclusivas de atendimento e venda que vão transformar seu negócio."
        ></img>
        <img
          src="./images/3.png"
          className={style.img_Carroussel}
          alt="Unhas decorativas"
        ></img>
      </div>
    </div>
  );
}

export default CarrosselMeT;
