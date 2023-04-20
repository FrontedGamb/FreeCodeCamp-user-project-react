import React from "react";
import "../styles/Testimonio.css";

function Testimonio(props) {

  return (
    <div className="container-testimonio">
        <img
          className="img-testimonio"
          src={require(`../img/${props.img}.png`)}
          alt="Foto de Shawn"
        />
      <div className="container-text">
        <p className="nombre">
          <strong>
          {props.name}
          </strong> in
           {props.country} 
        </p>
        <p className="cargo">{props.cargo} at {props.empresa}</p>
        <p className="testimonio">
          "{props.test}"
        </p>
      </div>
    </div>
  );
}

export {Testimonio};
