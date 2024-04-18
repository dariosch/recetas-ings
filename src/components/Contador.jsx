import React, { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>+1</button>
    </div>
  );
}

export default Contador;
