import React, { useState } from "react";
import style from "./Questions.module.css";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

function PerguntasFrequentes() {
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
            {open == true ? <FaAngleRight className={style.icon} /> : <FaAngleDown className={style.icon2} />}
            <h3
              onClick={click}
              className={open == true ? style.open : style.closed}
            >
              O curso é online?
            </h3>
          </div>
          {open && <p>Sim, o curso é 100% presencial!</p>}
        </div>

        <div>
          <div className={style.dd_question}>
            {open1 == true ? <FaAngleRight className={style.icon} /> : <FaAngleDown className={style.icon2} />}
            <h3
              onClick={click1}
              className={open1 == true ? style.open : style.closed}
            >
              Paga mais alguma coisa ?
            </h3>
          </div>
          {open1 && (
            <p>
              Com um único pagamento você terá acesso a 100% do curso sem valor
              adicional.
            </p>
          )}
        </div>

        <div>
          <div className={style.dd_question}>
            {open2 == true ? <FaAngleRight className={style.icon} /> : <FaAngleDown className={style.icon2} />}
            <h3
              onClick={click2}
              className={open2 == true ? style.open : style.closed}
            >
              Tem certificado ?
            </h3>
          </div>
          {open2 && (
            <p>
              Sim quando você concluir 80% do curso terá acesso automaticamente
              ao certificado!
            </p>
          )}
        </div>

        <div>
          <div className={style.dd_question}>
            {open3 == true ? <FaAngleRight className={style.icon} /> : <FaAngleDown className={style.icon2} />}
            <h3
              onClick={click3}
              className={open3 == true ? style.open : style.closed}
            >
              Como vejo as aulas ?
            </h3>
          </div>
          {open3 && (
            <p>
              Você recebe um e-mail que irá te direcionar para a plataforma
              kiwify com todas as aulas !
            </p>
          )}
        </div>

        <div>
          <div className={style.dd_question}>
            {open4 == true ? <FaAngleRight className={style.icon} /> : <FaAngleDown className={style.icon2} />}
            <h3
              onClick={click4}
              className={open4 == true ? style.open : style.closed}
            >
              É para iniciante ?
            </h3>
          </div>
          {open4 && (
            <p>
              Com certeza o curso serve para iniciante e para quem quer se
              aperfeiçoar
            </p>
          )}
        </div>

        <div>
          <div className={style.dd_question}>
            {open5 == true ? <FaAngleRight className={style.icon} /> : <FaAngleDown className={style.icon2} />}
            <h3
              onClick={click5}
              className={open5 == true ? style.open : style.closed}
            >
              Tem suporte?
            </h3>
          </div>
          {open5 && (
            <p>
              Com certeza, temos um grupo no whatsApp que você poderá tirar as suas dúvidas
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PerguntasFrequentes;
