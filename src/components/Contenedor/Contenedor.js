import { useState } from "react";
import "./Contenedor.css";
const Contenedor = () => {
  const [cambiarColor, setCambiarColor] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCambiarColor(e.target.inputColor.value);
  };
  let color;
  const colores = (cambiarColor) => {
    switch (cambiarColor.toLowerCase()) {
      case "negro":
        color = "#000000";
        break;
      case "azul":
        color = "#03045e";
        break;
      case "rojo":
        color = "#d90429";
        break;
      case "gris":
        color = "#B7B7CE";
        break;
      case "naranja":
        color = "#EE8130";
        break;
      case "verde":
        color = "#7AC74C";
        break;
      case "amarillo":
        color = "#F7D02C";
        break;
      case "verde agua":
        color = "#96D9D6";
        break;
      case "morado":
        color = "#6F35FC";
        break;
      case "café":
        color = "#705746";
        break;
      case "rosado":
        color = "#D685AD";
        break;
      default:
        console.log("El color no se encontró");
        break;
    }
  };
  colores(cambiarColor);
  return (
    <>
      <div className="contenedor">
        <div className="cuadro" style={{ backgroundColor: color }}></div>
        <div className="formulario">
          <form onSubmit={handleOnSubmit}>
            <input
              className="campos"
              type="text"
              name="inputColor"
              placeholder="Ingrese el nombre del color"
            />
            <input className="campos" type="submit" value="Cambiar" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Contenedor;
