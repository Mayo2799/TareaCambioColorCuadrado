import { useState } from "react";
import "./Contenedor.css";
const Contenedor = () => {
  const [cambiarColor, setCambiarColor] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCambiarColor(e.target.inputColor.value);
  };
  return (
    <>
      <div className="contenedor">
        <div
          className="cuadro"
          style={{ backgroundColor: cambiarColor.toLowerCase() }}
        ></div>
        <form onSubmit={handleOnSubmit} className="formulario">
          <input type="text" name="inputColor" />
          <input type="submit" value="Cambiar" />
        </form>
      </div>
    </>
  );
};
export default Contenedor;
