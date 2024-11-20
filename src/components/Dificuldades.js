import React, { useState } from "react";
import style from "./Dificuldades.module.css";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

function Dificuldades() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  function click() {
    setOpen(!open); // Ele  seta o valor oposto ao que já está inserido no estado
  }

  function click1() {
    setOpen1(!open1); // Ele  seta o valor oposto ao que já está inserido no estado
  }

  function click2() {
    setOpen2(!open2); // Ele  seta o valor oposto ao que já está inserido no estado
  }

  function click3() {
    setOpen3(!open3); // Ele  seta o valor oposto ao que já está inserido no estado
  }

  function click4() {
    setOpen4(!open4); // Ele  seta o valor oposto ao que já está inserido no estado
  }

  function click5() {
    setOpen5(!open5); // Ele  seta o valor oposto ao que já está inserido no estado
  }

  return (
    <div className={style.d_questions}>
      <div className={style.d_colum}>
        <div>
          <div className={style.dd_question}>
            {open === true ? (
              <FaAngleRight className={style.icon} />
            ) : (
              <FaAngleDown className={style.icon2} />
            )}
            <h3
              onClick={click}
              className={open === true ? style.open : style.closed}
            >
              Falta de Prática
            </h3>
          </div>
          {open && (
            <p>
              <IoMdArrowDropright />
              Dificuldade em criar designs detalhados pela falta de experiência
            </p>
          )}
        </div>

        <div>
          <div className={style.dd_question}>
            {open1 === true ? (
              <FaAngleRight className={style.icon} />
            ) : (
              <FaAngleDown className={style.icon2} />
            )}
            <h3
              onClick={click1}
              className={open1 === true ? style.open : style.closed}
            >
              Combinação de Cores
            </h3>
          </div>
          {open1 && (
            <p>
              <IoMdArrowDropright />
              Desafio em escolher e harmonizar cores e materiais
            </p>
          )}
        </div>

        <div>
          <div className={style.dd_question}>
            {open2 === true ? (
              <FaAngleRight className={style.icon} />
            ) : (
              <FaAngleDown className={style.icon2} />
            )}
            <h3
              onClick={click2}
              className={open2 === true ? style.open : style.closed}
            >
              Tempo de Execução
            </h3>
          </div>
          {open2 && (
            <p>
              <IoMdArrowDropright />
              Demora para finalizar decorações por falta de agilidade.
            </p>
          )}
        </div>

        <div>
          <div className={style.dd_question}>
            {open3 === true ? (
              <FaAngleRight className={style.icon} />
            ) : (
              <FaAngleDown className={style.icon2} />
            )}
            <h3
              onClick={click3}
              className={open3 === true ? style.open : style.closed}
            >
              Comunicação com Clientes
            </h3>
          </div>
          {open3 && (
            <p>
              <IoMdArrowDropright />
              Dificuldade em entender e atender às expectativas dos clientes
            </p>
          )}
        </div>

        <div>
          <div className={style.dd_question}>
            {open4 === true ? (
              <FaAngleRight className={style.icon} />
            ) : (
              <FaAngleDown className={style.icon2} />
            )}
            <h3
              onClick={click4}
              className={open4 === true ? style.open : style.closed}
            >
              Insegurança ao decorar
            </h3>
          </div>
          {open4 && (
            <p>
              <IoMdArrowDropright />
              Você já teve medo de errar e acabar decepcionando suas clientes?
              Essa falta de confiança pode limitar sua criatividade e impedir
              que você ofereça o melhor serviço.
            </p>
          )}
        </div>

        <div>
          <div className={style.dd_question}>
            {open5 === true ? (
              <FaAngleRight className={style.icon} />
            ) : (
              <FaAngleDown className={style.icon2} />
            )}
            <h3
              onClick={click5}
              className={open5 === true ? style.open : style.closed}
            >
              Dificuldade no lixamento e remoção da decoração
            </h3>
          </div>
          {open5 && (
            <p>
              <IoMdArrowDropright />
              Muitas profissionais enfrentam problemas ao lixar as unhas sem
              remover ou danificar a decoração, o que pode comprometer o
              resultado final e a satisfação das clientes.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dificuldades;
