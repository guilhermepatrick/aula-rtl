import React from "react";
import { Link } from "react-router-dom";
import ratola from "../images/ratola.png";

function OutraPagina() {
  return (
    <>
      <h1>Outra Página</h1>
      <Link to={"/"}>
        <p>Voltar para Lista</p>
      </Link>
      <img src={ratola} alt="Imagem de um Rato" />
    </>
  );
}

export default OutraPagina;
