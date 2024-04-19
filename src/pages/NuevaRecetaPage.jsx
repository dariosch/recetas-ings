import { React, useState } from "react";

function NuevaRecetaPage() {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaReceta = {
      id: Math.random().toString().slice(2, 11),
      name: nombre,
      ingredientes: ingredientes
        .split(",")
        .map((ingrediente) => ingrediente.trim()),
    };

    setNombre("");
    setIngredientes("");
  };

  return (
    <div>
      <h2>Agregar nueva receta:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de Receta :
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <br></br>
        </label>
        <label>
          Ingredientes (Separados por comas) :
          <input
            type="text"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
          />
          <br></br>
        </label>
        <button type="submit">Cargar!</button>
      </form>
    </div>
  );
}

export default NuevaRecetaPage;
