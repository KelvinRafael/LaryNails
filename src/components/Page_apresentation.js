import { useLayoutEffect } from "react";
import React from "react";
import style from "./Apresentation.module.css";
import CarrosselComentarios from "./CarrosselComentarios";
import CarrosselModels from "./CarrosselModels";
import CarrosselMeT from "./CarrosselMeT";
import PerguntasFrequentes from "./Questions";
import Dificuldades from "./Dificuldades";
import { FaCheck } from "react-icons/fa6";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "gsap/dist/ScrollTrigger";

function Apresentation() {
  // Effect do Title principal
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".Apresentation_h_title__Zv-s2", {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".Apresentation_d_title__EKedg",
        // markers: true,
        start: "top 350px",
        end: "bottom 400px",
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf(".Apresentation_h_title__Zv-s2");
    };
  }, []);

  // Effect dos botoes
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".Apresentation_img_bt__bQzDZ", {
      translateY: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".Apresentation_d_botoes__GJ9Y3",
        // markers: true,
        start: "top 440px",
        end: "bottom 450px",
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf(".Apresentation_img_bt__bQzDZ");
    };
  }, []);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(".Apresentation_p_por__nlxDs", {
  //     color: "rgb(33, 1, 48)",
  //     // opacity: 1,
  //     scrollTrigger: {
  //       trigger: ".Apresentation_s_priceOff__cUScr",
  //       scrub:true,
  //       markers:true,
  //       start:"top 200px",
  //       end:"bottom 300px"
  //     },
  //   });
  //   return () => {
  //     gsap.killTweensOf(".Apresentation_a_botaoRedirect2__CPO8a");
  //   };
  // }, []);

  return (
    <div>
      <title>Lary Moreira Nails</title>
      <div className={style.header}>
        {/* <h2 className={style.h_header}>Lary Moreira Nails</h2> */}
      </div>

      <div className={style.d_imagePrincipal}>
        <div>
          <img
            alt="Modelo principal"
            src="../images/Modelo_1_Assoprando_Gliter.png"
            className={style.img_ModeloPrincipal}
          ></img>
        </div>
        <div className={style.d_titlePrincipal}>
          <h2>
            Impulsione sua carreira com o curso
            <span>'Decorações que Vendem'!</span>
          </h2>
          <p>
            Domine as técnicas de decoração mais desejadas e transforme cada
            unha em uma obra-prima. Encante suas clientes com designs que se
            destacam pela precisão e pelo estilo, e leve seu trabalho para um
            novo patamar de sucesso!
          </p>
        </div>
      </div>

      <div className={style.d_title}>
        <p className={style.p_title}>Impulsione sua carreira com o curso</p>
        <h1 className={style.h_title}>Decorações que vendem</h1>
      </div>

      <div className={style.CarrosselMeT}>
        <CarrosselMeT />
      </div>

      <section className={style.s_Dificulty}>
        <h2>Dificuldades que quem está iniciando enfrenta</h2>
        <Dificuldades />
      </section>

      <section className={style.s_redirect}>
        <div>
          <h2>
            Se identificou? Então acesse o botão abaixo e tenha acesso ao curso
            “Decorações que vendem”
          </h2>
          <a
            className={style.a_botaoRedirect}
            href="https://pay.kiwify.com.br/y3nccHS?coupon=DECORACOESOFF"
          >
            Obter super Oferta
          </a>
        </div>
      </section>

      <section className={style.s_carrossel}>
        <CarrosselComentarios />
      </section>

      <section className={style.s_botoes}>
        <div className={style.d_botoes}>
          <div>
            <img
              alt="icones"
              src="../images/Botoes1.png"
              className={style.img_bt}
              // id={style.img_bt1}
            ></img>
            <p>
              <span>Conteúdo Aprovado.</span>Você terá acesso às aulas
              completas, gravadas em alta definição.
            </p>
          </div>

          <div>
            <img
              alt="icone"
              src="../images/Botoes2.png"
              className={style.img_bt}
              // id={style.img_bt2}
            ></img>
            <p>
              <span>Acesso Imediato.</span>Assim que a sua inscrição for
              confirmada você vai receber o acesso IMEDIATAMENTE em seu email
            </p>
          </div>

          <div>
            <img
              alt="icone"
              src="../images/Botoes3.png"
              className={style.img_bt}
              // id={style.img_bt3}
            ></img>
            <p>
              <span>2 Certificados Inclusos.</span> Sim, você não paga nada a
              mais para ter seus 2 CERTIFICADOS válidos direto de sua área do
              aluno.
            </p>
          </div>
        </div>
      </section>

      <section className={style.s_carrosselModels}>
        <CarrosselModels />
      </section>

      <section className={style.s_priceOff}>
        <div className={style.d_priceOff}>
          <h2>Decorações que vendem</h2>
          <div className={style.d_price}>
            <div>
              <p className={style.p_price}>
                <FaCheck className={style.i_check} />
                Vitalício
              </p>
              <p className={style.p_price}>
                <FaCheck className={style.i_check} />
                Suporte para a aluna
              </p>
              <p className={style.p_price}>
                <FaCheck className={style.i_check} />
                Certificado
              </p>
            </div>
            <div>
              <p className={style.p_de}>De R$97,00</p>
              <p className={style.p_por}>Por R$27,16</p>
              <p className={style.p_cartao}>Ou 6x de R$5,01 no cartão</p>
            </div>
          </div>
          <a
            className={style.a_botaoRedirect2}
            href="https://pay.kiwify.com.br/y3nccHS?coupon=DECORACOESOFF"
          >
            Obter super Oferta
          </a>
        </div>
      </section>

      <section className={style.s_sevenDays}>
        <div>
          <img
            alt="propaganda"
            src="./images/7days.png"
            className={style.img_sevenDays}
          ></img>
        </div>
      </section>

      <section className={style.s_questions}>
        <h1>Perguntas frequentes</h1>
        <PerguntasFrequentes />
      </section>

      <section className={style.s_Await}>
        <p>Instrutora</p>
        <div>
          <ul className={style.ul_List}>
            <li>Especialista em Alongamento de unhas</li>
            <li>Centenas de alunos em todo o Brasil</li>
          </ul>
        </div>
        <div>
          <h1>Espero por você</h1>
          <img alt="Modelo principal" src="./images/Await.png"></img>
        </div>
      </section>
    </div>
  );
}

export default Apresentation;
