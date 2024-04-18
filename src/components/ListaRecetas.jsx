import React from "react";

export function ListaRecetas({ recetas }) {
  return (
    <div>
      <p>Recetas posibles:</p>
      <ul>
        {recetas.map((receta) => (
          <li key={receta.id}> ✔ {receta.name}</li>
        ))}
      </ul>
    </div>
  );
}
